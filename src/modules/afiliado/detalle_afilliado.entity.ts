import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Barrio } from "../barrio/barrio.entity";
import { Afiliado } from "./afiliado.entity";

@Entity('detalle_afiliado')
export class Detalle_Afiliado extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id_detalle: number;

    @OneToOne(() => Barrio, {cascade: true, nullable: false, eager: true})
    @JoinColumn()
    barrio: Barrio;

    @Column({type: 'text', nullable: false})
    calle: string;

    @Column({type: 'integer', nullable: false})
    numero: number;

    @Column({type: 'text', nullable: true})
    observacion: string;
    
}