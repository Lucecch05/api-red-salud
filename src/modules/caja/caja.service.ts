import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Caja } from './caja.entity';
import { CajaRepository } from './caja.repository';

@Injectable()
export class CajaService {
    constructor(
        @InjectRepository(CajaRepository)
        private readonly _cajaRepository: CajaRepository,
        
    ){}

    async get(id: number): Promise<Caja> {
        if(!id){
            throw new BadRequestException('id must be sent');
        }

        const caja: Caja = await this._cajaRepository.findOne(id);

        if(!caja){
            throw new NotFoundException();
        }

        return caja;

    }

    async getAll(): Promise<Caja[]> {
        
        const cajas: Caja[] = await this._cajaRepository.find();

        
        return cajas;

    }

    async create(caja: Caja): Promise<Caja>{
        const savedCaja: Caja = await this._cajaRepository.save(caja);
        return savedCaja;
    }

    async update(id: number, caja: Caja): Promise<void>{
        await this._cajaRepository.update(id, caja);
        
    }

    async delete(id: number): Promise<void>{
        const cajaExist = await this._cajaRepository.findOne(id);

        if(!cajaExist){
            throw new NotFoundException();
        }

        await this._cajaRepository.delete(id);
    }

}
