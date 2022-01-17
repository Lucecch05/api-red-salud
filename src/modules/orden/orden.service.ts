import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MapperService } from 'src/shared/mapper.service';
import { OrdenDto } from './dto/orden.dto';
import { Orden } from './orden.entity';
import { OrdenRepository } from './orden.repository';

@Injectable()
export class OrdenService {
    constructor(
        @InjectRepository(OrdenRepository)
        private readonly _ordenRepository: OrdenRepository,
        private readonly _mapperService: MapperService,
    ){}

    async get(id: number): Promise<OrdenDto> {
        if(!id){
            throw new BadRequestException('id must be sent');
        }

        const orden: Orden = await this._ordenRepository.findOne(id);

        if(!orden){
            throw new NotFoundException();
        }

        return this._mapperService.map<Orden, OrdenDto>(orden, new OrdenDto());

    }

    async getAll(): Promise<OrdenDto> {
        
        const ordenes: Orden[] = await this._ordenRepository.find();

        
        return this._mapperService.mapCollection<Orden, OrdenDto>(ordenes, new OrdenDto());

    }

    async create(orden: Orden): Promise<OrdenDto>{
        const savedOrden: Orden = await this._ordenRepository.save(orden);
        return this._mapperService.map<Orden, OrdenDto>(orden, new OrdenDto());
    }

    async update(id: number, orden: Orden): Promise<void>{
        await this._ordenRepository.update(id, orden);
        
    }

    async delete(id: number): Promise<void>{
        const ordenExist = await this._ordenRepository.findOne(id);

        if(!ordenExist){
            throw new NotFoundException();
        }

        await this._ordenRepository.delete(id);
    }

}