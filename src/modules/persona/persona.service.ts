import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MapperService } from 'src/shared/mapper.service';
import { PersonaDto } from './dto/persona.dto';
import { Persona } from './persona.entity';
import { PersonaRepository } from './persona.repository';

@Injectable()
export class PersonaService {
    constructor(
        @InjectRepository(PersonaRepository)
        private readonly _personaRepository: PersonaRepository,
        private readonly _mapperService: MapperService,
    ){}

    async get(id: number): Promise<PersonaDto> {
        if(!id){
            throw new BadRequestException('id must be sent');
        }

        const persona: Persona = await this._personaRepository.findOne(id, {where: { activo: 1}});

        if(!persona){
            throw new NotFoundException();
        }

        return this._mapperService.map<Persona, PersonaDto>(persona, new PersonaDto());

    }

    async getAll(): Promise<PersonaDto> {
        
        const personas: Persona[] = await this._personaRepository.find();

        
        return this._mapperService.mapCollection<Persona, PersonaDto>(personas, new PersonaDto());

    }

    async create(persona: Persona): Promise<PersonaDto>{
        const savedPersona: Persona = await this._personaRepository.save(persona);
        return this._mapperService.map<Persona, PersonaDto>(persona, new PersonaDto());
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