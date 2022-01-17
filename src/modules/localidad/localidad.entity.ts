import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Barrio } from "../barrio/barrio.entity";

@Entity('localidades')
export class Localidad extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id_localidad: number;
    
    @OneToMany(() => Barrio, (barrios: Barrio) => barrios.localidad)
    barrios: Barrio[];

    @Column({type:'text', nullable: false})
    nombre: string;

    
}