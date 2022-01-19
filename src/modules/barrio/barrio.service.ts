import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Barrio } from './barrio.entity';
import { BarrioRepository } from './barrio.repository';

@Injectable()
export class BarrioService {
    constructor(
        @InjectRepository(BarrioRepository)
        private readonly _barrioRepository: BarrioRepository,
        
    ){}

    async get(id: number): Promise<Barrio> {
        if(!id){
            throw new BadRequestException('id must be sent');
        }

        const barrio: Barrio = await this._barrioRepository.findOne(id);

        if(!barrio){
            throw new NotFoundException();
        }

        return barrio;

    }

    async getAll(): Promise<Barrio[]> {
        
        const barrios: Barrio[] = await this._barrioRepository.find();

        
        return barrios;

    }

    async create(barrio: Barrio): Promise<Barrio>{
        const savedBarrio: Barrio = await this._barrioRepository.save(barrio);
        return savedBarrio;
    }

    async update(id: number, barrio: Barrio): Promise<void>{
        await this._barrioRepository.update(id, barrio);
        
    }

    async delete(id: number): Promise<void>{
        const barrioExist = await this._barrioRepository.findOne(id);

        if(!barrioExist){
            throw new NotFoundException();
        }

        await this._barrioRepository.delete(id);
    }

}
