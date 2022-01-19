import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Prestador } from './prestador.entity';
import { PrestadorRepository } from './prestador.repository';

@Injectable()
export class PrestadorService {
    constructor(
        @InjectRepository(PrestadorRepository)
        private readonly _prestadorRepository: PrestadorRepository,
        
    ){}

    async get(id: number): Promise<Prestador> {
        if(!id){
            throw new BadRequestException('id must be sent');
        }

        const prestador: Prestador = await this._prestadorRepository.findOne(id);

        if(!prestador){
            throw new NotFoundException();
        }

        return prestador;

    }

    async getAll(): Promise<Prestador[]> {
        
        const prestadores: Prestador[] = await this._prestadorRepository.find();

        
        return prestadores;

    }

    async create(prestador: Prestador): Promise<Prestador>{
        const savedPrestador: Prestador = await this._prestadorRepository.save(prestador);
        return savedPrestador;
    }

    async update(id: number, prestador: Prestador): Promise<void>{
        await this._prestadorRepository.update(id, prestador);
        
    }

    async delete(id: number): Promise<void>{
        const prestadorExist = await this._prestadorRepository.findOne(id);

        if(!prestadorExist){
            throw new NotFoundException();
        }

        await this._prestadorRepository.delete(id);
    }

}