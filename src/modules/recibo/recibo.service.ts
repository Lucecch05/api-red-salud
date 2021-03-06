import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Afiliado } from '../afiliado/afiliado.entity';
import { Recibo } from './recibo.entity';
import { ReciboRepository } from './recibo.repository';

@Injectable()
export class ReciboService {
    constructor(
        @InjectRepository(ReciboRepository)
        private readonly _reciboRepository: ReciboRepository,
        
    ){}

    async get(id: number): Promise<Recibo> {
        if(!id){
            throw new BadRequestException('id must be sent');
        }

        const recibo: Recibo = await this._reciboRepository.findOne(id);

        if(!recibo){
            throw new NotFoundException();
        }

        return recibo;

    }

    async getAll(): Promise<Recibo[]> {
        
        const recibos: Recibo[] = await this._reciboRepository.find();

        
        return recibos;

    }

    async create(recibo: Recibo): Promise<Recibo>{
        const savedRecibo: Recibo = await this._reciboRepository.save(recibo);
        return savedRecibo;
    }

    async update(id: number, recibo: Recibo): Promise<void>{
        await this._reciboRepository.update(id, recibo);
        
    }

    async delete(id: number): Promise<void>{
        const reciboExist = await this._reciboRepository.findOne(id);

        if(!reciboExist){
            throw new NotFoundException();
        }

        await this._reciboRepository.delete(id);
    }


    //CUSTOMS SERVICES

    async getAllByAfiliado(id_afiliado: number) {
        const afiliados = await this._reciboRepository.query(`SELECT r.* from recibos as r
                            left join afiliados as a on a.id_afiliado = r.afiliadoIdAfiliado
                            where a.id_afiliado = ${id_afiliado};`)


        return afiliados;
    }

    // async createMultipleRecibos(afiliados: Afiliado[], mes: string, anio: string){
    //     var recibos: Array<{id_recibo: number, id_afiliado: number}> = [];
    //     afiliados.forEach(afiliado => {
    //         const id_recibo = this._reciboRepository.createQueryBuilder()
    //                                                         .insert().into("recibos").values({
    //                                                             afiliadoIdAfiliado: afiliado.id_afiliado,
    //                                                             mes_recibo: mes,
    //                                                             anio_recibo: anio
    //                                                         }).returning("id_recibo").execute();
            
    //         recibos.push({id_recibo: id_recibo.raw.id_recibo, id_afiliado: afiliado.id_afiliado});
    //     });

    // }

}