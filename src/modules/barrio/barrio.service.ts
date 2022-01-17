import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MapperService } from 'src/shared/mapper.service';
import { BarrioDto } from './dto/barrio.dto';
import { Barrio } from './barrio.entity';
import { BarrioRepository } from './barrio.repository';

@Injectable()
export class BarrioService {
    constructor(
        @InjectRepository(BarrioRepository)
        private readonly _barrioRepository: BarrioRepository,
        private readonly _mapperService: MapperService,
    ){}

    async get(id: number): Promise<BarrioDto> {
        if(!id){
            throw new BadRequestException('id must be sent');
        }

        const barrio: Barrio = await this._barrioRepository.findOne(id);

        if(!barrio){
            throw new NotFoundException();
        }

        return this._mapperService.map<Barrio, BarrioDto>(barrio, new BarrioDto());

    }

    async getAll(): Promise<BarrioDto> {
        
        const barrios: Barrio[] = await this._barrioRepository.find();

        
        return this._mapperService.mapCollection<Barrio, BarrioDto>(barrios, new BarrioDto());

    }

    async create(barrio: Barrio): Promise<BarrioDto>{
        const savedBarrio: Barrio = await this._barrioRepository.save(barrio);
        return this._mapperService.map<Barrio, BarrioDto>(barrio, new BarrioDto());
    }

    async update(id: number, barrio: Barrio): Promise<void>{
        await this._barrioRepository.update(id, barrio);
        
    }

    async delete(id: number): Promise<void>{
        const barrioExist = await this._barrioRepository.findOne(id);

        if(!barrioExist){
            throw new NotFoundException();
        }

        await this._barrioRepository.delete(id);
    }

}
