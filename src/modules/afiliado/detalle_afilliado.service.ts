import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DetalleAfiliadoRepository } from "./detalle_afiliado.repository";
import { Detalle_Afiliado } from "./detalle_afilliado.entity";

@Injectable()
export class DetalleAfiliadoService {
    constructor(
        @InjectRepository(DetalleAfiliadoRepository)
        private readonly _detalleAfiliadoRepository: DetalleAfiliadoRepository,
        
    ){}

    async get(id: number): Promise<Detalle_Afiliado> {
        if(!id){
            throw new BadRequestException('id must be sent');
        }

        const detalle: Detalle_Afiliado = await this._detalleAfiliadoRepository.findOne(id);

        if(!detalle){
            throw new NotFoundException();
        }

        return detalle;

    }

    async getAll(): Promise<Detalle_Afiliado[]> {
        
        const detalles: Detalle_Afiliado[] = await this._detalleAfiliadoRepository.find();

        
        return detalles;

    }

    async create(detalle: Detalle_Afiliado): Promise<Detalle_Afiliado>{
        const savedDetalleAfiliado: Detalle_Afiliado = await this._detalleAfiliadoRepository.save(detalle);
        return savedDetalleAfiliado;
    }

    async update(id: number, detalle: Detalle_Afiliado): Promise<void>{
        await this._detalleAfiliadoRepository.update(id, detalle);
        
    }

    async delete(id: number): Promise<void>{
        const detalleExist = await this._detalleAfiliadoRepository.findOne(id);

        if(!detalleExist){
            throw new NotFoundException();
        }

        await this._detalleAfiliadoRepository.delete(id);
    }
}