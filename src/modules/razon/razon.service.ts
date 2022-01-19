import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Razon } from './razon.entity';
import { RazonRepository } from './razon.repository';

@Injectable()
export class RazonService {
    constructor(
        @InjectRepository(RazonRepository)
        private readonly _razonRepository: RazonRepository,
        
    ){}

    async get(id: number): Promise<Razon> {
        if(!id){
            throw new BadRequestException('id must be sent');
        }

        const razon: Razon = await this._razonRepository.findOne(id);

        if(!razon){
            throw new NotFoundException();
        }

        return razon;

    }

    async getAll(): Promise<Razon[]> {
        
        const razones: Razon[] = await this._razonRepository.find();

        
        return razones;

    }

    async create(razon: Razon): Promise<Razon>{
        const savedRazon: Razon = await this._razonRepository.save(razon);
        return savedRazon;
    }

    async update(id: number, razon: Razon): Promise<void>{
        await this._razonRepository.update(id, razon);
        
    }

    async delete(id: number): Promise<void>{
        const razonExist = await this._razonRepository.findOne(id);

        if(!razonExist){
            throw new NotFoundException();
        }

        await this._razonRepository.delete(id);
    }

}