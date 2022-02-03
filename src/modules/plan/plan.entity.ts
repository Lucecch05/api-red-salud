import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Afiliado } from "../afiliado/afiliado.entity";

@Entity('planes')
export class Plan extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id_plan: number;

    @OneToMany(() => Afiliado, (afiliados: Afiliado) => afiliados.plan ,{eager: true})
    afiliados: Afiliado[];

    @Column({type: 'text', nullable: false})
    descripcion: string;

    @Column({type: 'float', nullable: false})
    precio: number;
}