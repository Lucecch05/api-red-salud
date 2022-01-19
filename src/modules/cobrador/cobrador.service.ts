import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cobrador } from './cobrador.entity';
import { CobradorRepository } from './cobrador.repository';

@Injectable()
export class CobradorService {
    constructor(
        @InjectRepository(CobradorRepository)
        private readonly _cobradorRepository: CobradorRepository,
        
    ){}

    async get(id: number): Promise<Cobrador> {
        if(!id){
            throw new BadRequestException('id must be sent');
        }

        const cobrador: Cobrador = await this._cobradorRepository.findOne(id);

        if(!cobrador){
            throw new NotFoundException();
        }

        return cobrador;

    }

    async getAll(): Promise<Cobrador[]> {
        
        const cobradores: Cobrador[] = await this._cobradorRepository.find();

        
        return cobradores;

    }

    async create(cobrador: Cobrador): Promise<Cobrador>{
        const savedCobrador: Cobrador = await this._cobradorRepository.save(cobrador);
        return savedCobrador;
    }

    async update(id: number, cobrador: Cobrador): Promise<void>{
        await this._cobradorRepository.update(id, cobrador);
        
    }

    async delete(id: number): Promise<void>{
        const cobradorExist = await this._cobradorRepository.findOne(id);

        if(!cobradorExist){
            throw new NotFoundException();
        }

        await this._cobradorRepository.delete(id);
    }

}
