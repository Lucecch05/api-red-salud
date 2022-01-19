import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from './persona.entity';
import { PersonaRepository } from './persona.repository';

@Injectable()
export class PersonaService {
    constructor(
        @InjectRepository(PersonaRepository)
        private readonly _personaRepository: PersonaRepository,
        
    ){}

    async get(id: number): Promise<Persona> {
        if(!id){
            throw new BadRequestException('id must be sent');
        }

        const persona: Persona = await this._personaRepository.findOne(id, {where: { activo: 1}});

        if(!persona){
            throw new NotFoundException();
        }

        return persona;

    }

    async getAll(): Promise<Persona[]> {
        
        const personas: Persona[] = await this._personaRepository.find();

        
        return personas;

    }

    async create(persona: Persona): Promise<Persona>{
        const savedPersona: Persona = await this._personaRepository.save(persona);
        return savedPersona;
    }

    async update(id: number, persona: Persona): Promise<void>{
        await this._personaRepository.update(id, persona);
        
    }

    async delete(id: number): Promise<void>{
        const personaExist = await this._personaRepository.findOne(id, { where: { activo: 1} });

        if(!personaExist){
            throw new NotFoundException();
        }

        await this._personaRepository.update(id, {activo: 0});
    }

}