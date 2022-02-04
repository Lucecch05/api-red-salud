import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Afiliado } from './afiliado.entity';
import { AfiliadoRepository } from './afiliado.repository';

@Injectable()
export class AfiliadoService {
    constructor(
        @InjectRepository(AfiliadoRepository)
        private readonly _afiliadoRepository: AfiliadoRepository,
        
    ){}

    async get(id: number): Promise<Afiliado> {
        if(!id){
            throw new BadRequestException('id must be sent');
        }

        const afiliado: Afiliado = await this._afiliadoRepository.findOne(id);

        if(!afiliado){
            throw new NotFoundException();
        }

        return afiliado;

    }

    async getAll(): Promise<Afiliado[]> {
        
        const afiliados: Afiliado[] = await this._afiliadoRepository.find();

        
        return afiliados;

    }

    async create(afiliado: Afiliado): Promise<Afiliado>{
        const savedAfiliado: Afiliado = await this._afiliadoRepository.save(afiliado);
        return savedAfiliado;
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


    //CUSTOMS SERVICES

    async getAllAfiliados(){
        const afiliados = await this._afiliadoRepository.query("")     

        return afiliados;
    }

}
