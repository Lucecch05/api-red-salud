import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Persona } from './persona.entity';
import { PersonaService } from './persona.service';

@Controller('persona')
export class PersonaController {
    constructor(private readonly _personaService: PersonaService){}

    @Get(':id')
    async getPersona(@Param('id',ParseIntPipe) id: number): Promise<Persona>{
        const persona = await this._personaService.get(id);
        return persona;
      
    }

    @Get()
    async getPersonas(): Promise<Persona[]>{
        const personas: Persona[] = await this._personaService.getAll();
        return personas;
    }

    @Post()
    async createPersona(@Body() persona: Persona): Promise<Persona>{
       const createdPersona = await this._personaService.create(persona);
       return createdPersona;

    }

    @Patch(':id')
    async updatePersona(@Param('id',ParseIntPipe) id: number, @Body() persona: Persona){
       await this._personaService.update(id, persona);
        return true;
    }

    @Delete(':id')
    async deletePersona(@Param('id',ParseIntPipe) id: number){
        await this._personaService.delete(id);
        return true;
    }
}