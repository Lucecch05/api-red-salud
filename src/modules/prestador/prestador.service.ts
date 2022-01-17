import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MapperService } from 'src/shared/mapper.service';
import { PrestadorDto } from './dto/prestador.dto';
import { Prestador } from './prestador.entity';
import { PrestadorRepository } from './prestador.repository';

@Injectable()
export class PrestadorService {
    constructor(
        @InjectRepository(PrestadorRepository)
        private readonly _prestadorRepository: PrestadorRepository,
        private readonly _mapperService: MapperService,
    ){}

    async get(id: number): Promise<PrestadorDto> {
        if(!id){
            throw new BadRequestException('id must be sent');
        }

        const prestador: Prestador = await this._prestadorRepository.findOne(id);

        if(!prestador){
            throw new NotFoundException();
        }

        return this._mapperService.map<Prestador, PrestadorDto>(prestador, new PrestadorDto());

    }

    async getAll(): Promise<PrestadorDto> {
        
        const prestadores: Prestador[] = await this._prestadorRepository.find();

        
        return this._mapperService.mapCollection<Prestador, PrestadorDto>(prestadores, new PrestadorDto());

    }

    async create(prestador: Prestador): Promise<PrestadorDto>{
        const savedPrestador: Prestador = await this._prestadorRepository.save(prestador);
        return this._mapperService.map<Prestador, PrestadorDto>(prestador, new PrestadorDto());
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