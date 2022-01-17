import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Localidad } from "../localidad/localidad.entity";

@Entity('barrios')
export class Barrio extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id_barrio: number;

    @ManyToOne(() => Localidad, (localidad: Localidad) => localidad.barrios)
    localidad: Localidad;

    @Column({type:'text', nullable: false})
    descripcion: string;

}