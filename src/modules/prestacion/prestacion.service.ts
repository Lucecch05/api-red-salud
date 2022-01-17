import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MapperService } from 'src/shared/mapper.service';
import { PrestacionDto } from './dto/prestacion.dto';
import { Prestacion } from './prestacion.entity';
import { PrestacionRepository } from './prestacion.repository';

@Injectable()
export class PrestacionService {
    constructor(
        @InjectRepository(PrestacionRepository)
        private readonly _prestacionRepository: PrestacionRepository,
        private readonly _mapperService: MapperService,
    ){}

    async get(id: number): Promise<PrestacionDto> {
        if(!id){
            throw new BadRequestException('id must be sent');
        }

        const prestacion: Prestacion = await this._prestacionRepository.findOne(id);

        if(!prestacion){
            throw new NotFoundException();
        }

        return this._mapperService.map<Prestacion, PrestacionDto>(prestacion, new PrestacionDto());

    }

    async getAll(): Promise<PrestacionDto> {
        
        const prestaciones: Prestacion[] = await this._prestacionRepository.find();

        
        return this._mapperService.mapCollection<Prestacion, PrestacionDto>(prestaciones, new PrestacionDto());

    }

    async create(prestacion: Prestacion): Promise<PrestacionDto>{
        const savedPrestacion: Prestacion = await this._prestacionRepository.save(prestacion);
        return this._mapperService.map<Prestacion, PrestacionDto>(prestacion, new PrestacionDto());
    }

    async update(id: number, prestacion: Prestacion): Promise<void>{
        await this._prestacionRepository.update(id, prestacion);
        
    }

    async delete(id: number): Promise<void>{
        const prestacionExist = await this._prestacionRepository.findOne(id);

        if(!prestacionExist){
            throw new NotFoundException();
        }

        await this._prestacionRepository.delete(id);
    }

}