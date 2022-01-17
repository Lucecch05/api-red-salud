import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MapperService } from 'src/shared/mapper.service';
import { EspecialidadDto } from './dto/especialidad.dto';
import { Especialidad } from './especialidad.entity';
import { EspecialidadRepository } from './especialidad.repository';

@Injectable()
export class EspecialidadService {
    constructor(
        @InjectRepository(EspecialidadRepository)
        private readonly _especialidadRepository: EspecialidadRepository,
        private readonly _mapperService: MapperService,
    ){}

    async get(id: number): Promise<EspecialidadDto> {
        if(!id){
            throw new BadRequestException('id must be sent');
        }

        const especialidad: Especialidad = await this._especialidadRepository.findOne(id);

        if(!especialidad){
            throw new NotFoundException();
        }

        return this._mapperService.map<Especialidad, EspecialidadDto>(especialidad, new EspecialidadDto());

    }

    async getAll(): Promise<EspecialidadDto> {
        
        const especialidades: Especialidad[] = await this._especialidadRepository.find();

        
        return this._mapperService.mapCollection<Especialidad, EspecialidadDto>(especialidades, new EspecialidadDto());

    }

    async create(especialidad: Especialidad): Promise<EspecialidadDto>{
        const savedEspecialidad: Especialidad = await this._especialidadRepository.save(especialidad);
        return this._mapperService.map<Especialidad, EspecialidadDto>(especialidad, new EspecialidadDto());
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