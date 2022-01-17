import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MapperService } from 'src/shared/mapper.service';
import { AfiliadoDto } from './dto/afiliado.dto';
import { Afiliado } from './afiliado.entity';
import { AfiliadoRepository } from './afiliado.repository';

@Injectable()
export class AfiliadoService {
    constructor(
        @InjectRepository(AfiliadoRepository)
        private readonly _afiliadoRepository: AfiliadoRepository,
        private readonly _mapperService: MapperService,
    ){}

    async get(id: number): Promise<AfiliadoDto> {
        if(!id){
            throw new BadRequestException('id must be sent');
        }

        const afiliado: Afiliado = await this._afiliadoRepository.findOne(id);

        if(!afiliado){
            throw new NotFoundException();
        }

        return this._mapperService.map<Afiliado, AfiliadoDto>(afiliado, new AfiliadoDto());

    }

    async getAll(): Promise<AfiliadoDto> {
        
        const afiliados: Afiliado[] = await this._afiliadoRepository.find();

        
        return this._mapperService.mapCollection<Afiliado, AfiliadoDto>(afiliados, new AfiliadoDto());

    }

    async create(afiliado: Afiliado): Promise<AfiliadoDto>{
        const savedAfiliado: Afiliado = await this._afiliadoRepository.save(afiliado);
        return this._mapperService.map<Afiliado, AfiliadoDto>(afiliado, new AfiliadoDto());
    }

    async update(id: number, afiliado: Afiliado): Promise<void>{
        await this._afiliadoRepository.update(id, afiliado);
        
    }

    async delete(id: number): Promise<void>{
        const afiliadoExist = await this._afiliadoRepository.findOne(id, {where: { estado: 1}});

        if(!afiliadoExist){
            throw new NotFoundException();
        }

        await this._afiliadoRepository.update(id, { estado: 0});
    }

}
