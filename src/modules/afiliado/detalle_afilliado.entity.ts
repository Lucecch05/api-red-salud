import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Barrio } from "../barrio/barrio.entity";
import { Afiliado } from "./afiliado.entity";

@Entity('detalle_afiliado')
export class Detalle_Afiliado extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id_detalle: number;

    @ManyToOne(() => Barrio, (barrio: Barrio) => barrio.detalles,{eager: true})
    barrio: Barrio;

    @Column({type: 'text', nullable: false})
    calle: string;

    @Column({type: 'integer', nullable: false})
    numero: number;

    @Column({type: 'text', nullable: true})
    observacion: string;
    
}