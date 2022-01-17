import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MapperService } from 'src/shared/mapper.service';
import { CobradorDto } from './dto/cobrador.dto';
import { Cobrador } from './cobrador.entity';
import { CobradorRepository } from './cobrador.repository';

@Injectable()
export class CobradorService {
    constructor(
        @InjectRepository(CobradorRepository)
        private readonly _cobradorRepository: CobradorRepository,
        private readonly _mapperService: MapperService,
    ){}

    async get(id: number): Promise<CobradorDto> {
        if(!id){
            throw new BadRequestException('id must be sent');
        }

        const cobrador: Cobrador = await this._cobradorRepository.findOne(id);

        if(!cobrador){
            throw new NotFoundException();
        }

        return this._mapperService.map<Cobrador, CobradorDto>(cobrador, new CobradorDto());

    }

    async getAll(): Promise<CobradorDto> {
        
        const cobradores: Cobrador[] = await this._cobradorRepository.find();

        
        return this._mapperService.mapCollection<Cobrador, CobradorDto>(cobradores, new CobradorDto());

    }

    async create(cobrador: Cobrador): Promise<CobradorDto>{
        const savedCobrador: Cobrador = await this._cobradorRepository.save(cobrador);
        return this._mapperService.map<Cobrador, CobradorDto>(cobrador, new CobradorDto());
    }

    async update(id: number, cobrador: Cobrador): Promise<void>{
        await this._cobradorRepository.update(id, cobrador);
        
    }

    async delete(id: number): Promise<void>{
        const cobradorExist = await this._cobradorRepository.findOne(id);

        if(!cobradorExist){
            throw new NotFoundException();
        }

        await this._cobradorRepository.delete(id);
    }

}
