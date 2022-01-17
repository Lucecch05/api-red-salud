import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Prestador } from "../prestador/prestador.entity";

@Entity('prestaciones')
export class Prestacion extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    codigo_prestacion: number;

    @ManyToMany(() => Prestador, prestador => prestador.prestaciones)
    prestadores: Prestador[];

    @Column({type: 'text', nullable: false})
    descripcion: string;
}