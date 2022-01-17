import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MapperService } from 'src/shared/mapper.service';
import { LocalidadDto } from './dto/localidad.dto';
import { Localidad } from './localidad.entity';
import { LocalidadRepository } from './localidad.repository';

@Injectable()
export class LocalidadService {
    constructor(
        @InjectRepository(LocalidadRepository)
        private readonly _localidadRepository: LocalidadRepository,
        private readonly _mapperService: MapperService,
    ){}

    async get(id: number): Promise<LocalidadDto> {
        if(!id){
            throw new BadRequestException('id must be sent');
        }

        const localidad: Localidad = await this._localidadRepository.findOne(id);

        if(!localidad){
            throw new NotFoundException();
        }

        return this._mapperService.map<Localidad, LocalidadDto>(localidad, new LocalidadDto());

    }

    async getAll(): Promise<LocalidadDto> {
        
        const localidades: Localidad[] = await this._localidadRepository.find();

        
        return this._mapperService.mapCollection<Localidad, LocalidadDto>(localidades, new LocalidadDto());

    }

    async create(localidad: Localidad): Promise<LocalidadDto>{
        const savedLocalidad: Localidad = await this._localidadRepository.save(localidad);
        return this._mapperService.map<Localidad, LocalidadDto>(localidad, new LocalidadDto());
    }

    async update(id: number, localidad: Localidad): Promise<void>{
        await this._localidadRepository.update(id, localidad);
        
    }

    async delete(id: number): Promise<void>{
        const localidadExist = await this._localidadRepository.findOne(id);

        if(!localidadExist){
            throw new NotFoundException();
        }

        await this._localidadRepository.delete(id);
    }

}