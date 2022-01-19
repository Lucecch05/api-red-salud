import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Especialidad } from './especialidad.entity';
import { EspecialidadRepository } from './especialidad.repository';

@Injectable()
export class EspecialidadService {
    constructor(
        @InjectRepository(EspecialidadRepository)
        private readonly _especialidadRepository: EspecialidadRepository,
        
    ){}

    async get(id: number): Promise<Especialidad> {
        if(!id){
            throw new BadRequestException('id must be sent');
        }

        const especialidad: Especialidad = await this._especialidadRepository.findOne(id);

        if(!especialidad){
            throw new NotFoundException();
        }

        return especialidad;

    }

    async getAll(): Promise<Especialidad[]> {
        
        const especialidades: Especialidad[] = await this._especialidadRepository.find();

        
        return especialidades;

    }

    async create(especialidad: Especialidad): Promise<Especialidad>{
        const savedEspecialidad: Especialidad = await this._especialidadRepository.save(especialidad);
        return savedEspecialidad;
    }

    async update(id: number, especialidad: Especialidad): Promise<void>{
        await this._especialidadRepository.update(id, especialidad);
        
    }

    async delete(id: number): Promise<void>{
        const especialidadExist = await this._especialidadRepository.findOne(id);

        if(!especialidadExist){
            throw new NotFoundException();
        }

        await this._especialidadRepository.delete(id);
    }

}