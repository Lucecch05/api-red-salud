import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('planes')
export class Plan extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id_plan: number;

    @Column({type: 'text', nullable: false})
    descripcion: string;

    @Column({type: 'float', nullable: false})
    precio: number;
}