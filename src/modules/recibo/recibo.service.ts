import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MapperService } from 'src/shared/mapper.service';
import { ReciboDto } from './dto/recibo.dto';
import { Recibo } from './recibo.entity';
import { ReciboRepository } from './recibo.repository';

@Injectable()
export class ReciboService {
    constructor(
        @InjectRepository(ReciboRepository)
        private readonly _reciboRepository: ReciboRepository,
        private readonly _mapperService: MapperService,
    ){}

    async get(id: number): Promise<ReciboDto> {
        if(!id){
            throw new BadRequestException('id must be sent');
        }

        const recibo: Recibo = await this._reciboRepository.findOne(id);

        if(!recibo){
            throw new NotFoundException();
        }

        return this._mapperService.map<Recibo, ReciboDto>(recibo, new ReciboDto());

    }

    async getAll(): Promise<ReciboDto> {
        
        const recibos: Recibo[] = await this._reciboRepository.find();

        
        return this._mapperService.mapCollection<Recibo, ReciboDto>(recibos, new ReciboDto());

    }

    async create(recibo: Recibo): Promise<ReciboDto>{
        const savedRecibo: Recibo = await this._reciboRepository.save(recibo);
        return this._mapperService.map<Recibo, ReciboDto>(recibo, new ReciboDto());
    }

    async update(id: number, recibo: Recibo): Promise<void>{
        await this._reciboRepository.update(id, recibo);
        
    }

    async delete(id: number): Promise<void>{
        const reciboExist = await this._reciboRepository.findOne(id);

        if(!reciboExist){
            throw new NotFoundException();
        }

        await this._reciboRepository.delete(id);
    }

}