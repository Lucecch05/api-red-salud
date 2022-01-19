import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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

}