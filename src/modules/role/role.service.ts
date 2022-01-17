import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MapperService } from 'src/shared/mapper.service';
import { RolDto } from './dto/role.dto';
import { Rol } from './role.entity';
import { RolRepository } from './role.repository';

@Injectable()
export class RolService {
    constructor(
        @InjectRepository(RolRepository)
        private readonly _rolRepository: RolRepository,
        private readonly _mapperService: MapperService,
    ){}

    async get(id: number): Promise<RolDto> {
        if(!id){
            throw new BadRequestException('id must be sent');
        }

        const rol: Rol = await this._rolRepository.findOne(id);

        if(!rol){
            throw new NotFoundException();
        }

        return this._mapperService.map<Rol, RolDto>(rol, new RolDto());

    }

    async getAll(): Promise<RolDto> {
        
        const roles: Rol[] = await this._rolRepository.find();

        
        return this._mapperService.mapCollection<Rol, RolDto>(roles, new RolDto());

    }

    async create(rol: Rol): Promise<RolDto>{
        const savedRol: Rol = await this._rolRepository.save(rol);
        return this._mapperService.map<Rol, RolDto>(rol, new RolDto());
    }

    async update(id: number, rol: Rol): Promise<void>{
        await this._rolRepository.update(id, rol);
        
    }

    async delete(id: number): Promise<void>{
        const rolExist = await this._rolRepository.findOne(id);

        if(!rolExist){
            throw new NotFoundException();
        }

        await this._rolRepository.delete(id);
    }
}
