import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MapperService } from 'src/shared/mapper.service';
import { DescuentoDto } from './dto/descuento.dto';
import { Descuento } from './descuento.entity';
import { DescuentoRepository } from './descuento.repository';

@Injectable()
export class DescuentoService {
    constructor(
        @InjectRepository(DescuentoRepository)
        private readonly _descuentoRepository: DescuentoRepository,
        private readonly _mapperService: MapperService,
    ){}

    async get(id: number): Promise<DescuentoDto> {
        if(!id){
            throw new BadRequestException('id must be sent');
        }

        const descuento: Descuento = await this._descuentoRepository.findOne(id);

        if(!descuento){
            throw new NotFoundException();
        }

        return this._mapperService.map<Descuento, DescuentoDto>(descuento, new DescuentoDto());

    }

    async getAll(): Promise<DescuentoDto> {
        
        const descuentos: Descuento[] = await this._descuentoRepository.find();

        
        return this._mapperService.mapCollection<Descuento, DescuentoDto>(descuentos, new DescuentoDto());

    }

    async create(descuento: Descuento): Promise<DescuentoDto>{
        const savedDescuento: Descuento = await this._descuentoRepository.save(descuento);
        return this._mapperService.map<Descuento, DescuentoDto>(descuento, new DescuentoDto());
    }

    async update(id: number, descuento: Descuento): Promise<void>{
        await this._descuentoRepository.update(id, descuento);
        
    }

    async delete(id: number): Promise<void>{
        const descuentoExist = await this._descuentoRepository.findOne(id);

        if(!descuentoExist){
            throw new NotFoundException();
        }

        await this._descuentoRepository.delete(id);
    }

}
