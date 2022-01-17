import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MapperService } from 'src/shared/mapper.service';
import { RazonDto } from './dto/razon.dto';
import { Razon } from './razon.entity';
import { RazonRepository } from './razon.repository';

@Injectable()
export class RazonService {
    constructor(
        @InjectRepository(RazonRepository)
        private readonly _razonRepository: RazonRepository,
        private readonly _mapperService: MapperService,
    ){}

    async get(id: number): Promise<RazonDto> {
        if(!id){
            throw new BadRequestException('id must be sent');
        }

        const razon: Razon = await this._razonRepository.findOne(id);

        if(!razon){
            throw new NotFoundException();
        }

        return this._mapperService.map<Razon, RazonDto>(razon, new RazonDto());

    }

    async getAll(): Promise<RazonDto> {
        
        const razones: Razon[] = await this._razonRepository.find();

        
        return this._mapperService.mapCollection<Razon, RazonDto>(razones, new RazonDto());

    }

    async create(razon: Razon): Promise<RazonDto>{
        const savedRazon: Razon = await this._razonRepository.save(razon);
        return this._mapperService.map<Razon, RazonDto>(razon, new RazonDto());
    }

    async update(id: number, razon: Razon): Promise<void>{
        await this._razonRepository.update(id, razon);
        
    }

    async delete(id: number): Promise<void>{
        const razonExist = await this._razonRepository.findOne(id);

        if(!razonExist){
            throw new NotFoundException();
        }

        await this._razonRepository.delete(id);
    }

}