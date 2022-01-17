import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MapperService } from 'src/shared/mapper.service';
import { CajaDto } from './dto/caja.dto';
import { Caja } from './caja.entity';
import { CajaRepository } from './caja.repository';

@Injectable()
export class CajaService {
    constructor(
        @InjectRepository(CajaRepository)
        private readonly _cajaRepository: CajaRepository,
        private readonly _mapperService: MapperService,
    ){}

    async get(id: number): Promise<CajaDto> {
        if(!id){
            throw new BadRequestException('id must be sent');
        }

        const caja: Caja = await this._cajaRepository.findOne(id);

        if(!caja){
            throw new NotFoundException();
        }

        return this._mapperService.map<Caja, CajaDto>(caja, new CajaDto());

    }

    async getAll(): Promise<CajaDto> {
        
        const cajas: Caja[] = await this._cajaRepository.find();

        
        return this._mapperService.mapCollection<Caja, CajaDto>(cajas, new CajaDto());

    }

    async create(caja: Caja): Promise<CajaDto>{
        const savedCaja: Caja = await this._cajaRepository.save(caja);
        return this._mapperService.map<Caja, CajaDto>(caja, new CajaDto());
    }

    async update(id: number, caja: Caja): Promise<void>{
        await this._cajaRepository.update(id, caja);
        
    }

    async delete(id: number): Promise<void>{
        const cajaExist = await this._cajaRepository.findOne(id);

        if(!cajaExist){
            throw new NotFoundException();
        }

        await this._cajaRepository.delete(id);
    }

}
