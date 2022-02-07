import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Afiliado } from './afiliado.entity';
import { AfiliadoRepository } from './afiliado.repository';

@Injectable()
export class AfiliadoService {
    constructor(
        @InjectRepository(AfiliadoRepository)
        private readonly _afiliadoRepository: AfiliadoRepository,
        
    ){}

    async get(id: number): Promise<Afiliado> {
        if(!id){
            throw new BadRequestException('id must be sent');
        }

        const afiliado: Afiliado = await this._afiliadoRepository.findOne(id);

        if(!afiliado){
            throw new NotFoundException();
        }

        return afiliado;

    }

    async getAll(): Promise<Afiliado[]> {
        
        const afiliados: Afiliado[] = await this._afiliadoRepository.find();

        
        return afiliados;

    }

    async create(afiliado: Afiliado): Promise<Afiliado>{
        const savedAfiliado: Afiliado = await this._afiliadoRepository.save(afiliado);
        return savedAfiliado;
    }

    async update(id: number, afiliado: Afiliado): Promise<void>{
        await this._afiliadoRepository.update(id, afiliado);
        
    }

    async delete(id: number): Promise<void>{
        const afiliadoExist = await this._afiliadoRepository.findOne(id, {where: { estado: 1}});

        if(!afiliadoExist){
            throw new NotFoundException();
        }

        await this._afiliadoRepository.update(id, { estado: 0});
    }


    //CUSTOMS SERVICES

    async getAllAfiliados(){
        const afiliados = await this._afiliadoRepository.query(`SELECT 
                af.id_afiliado as id_afiliado,
                af.fecha_creacion,
                af.fecha_venta,
                af.fecha_cobro,
                af.estado,
                af.importe,
                af.telefono,
                p.nombre as nombre,
                p.apellido as apellido,
                p.dni as dni,
                plan.descripcion as plan_descripcion,
                if (d.importe, d.importe, d.porcentaje) as descuento,
                l.nombre as localidad
                FROM afiliados as af
                left join personas as p on p.afiliadoIdAfiliado = id_afiliado
                left join planes as plan on plan.id_plan = af.planIdPlan
                left join descuentos as d on d.id_descuento = af.descuentoIdDescuento
                left join detalle_afiliado as daf on daf.id_detalle = af.id_detalle
                left join barrios as b on b.id_barrio = daf.barrioIdBarrio
                left join localidades as l on l.id_localidad = b.localidadIdLocalidad
                where p.num_afiliado = 0 order by af.fecha_creacion asc;`)
 

        return afiliados;
    }

}
