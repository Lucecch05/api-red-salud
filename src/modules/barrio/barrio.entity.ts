import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Detalle_Afiliado } from "../afiliado/detalle_afilliado.entity";
import { Localidad } from "../localidad/localidad.entity";

@Entity('barrios')
export class Barrio extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id_barrio: number;

    @OneToMany(() => Detalle_Afiliado, (detalles: Detalle_Afiliado) => detalles.barrio)
    detalles: Detalle_Afiliado[];

    @ManyToOne(() => Localidad, (localidad: Localidad) => localidad.barrios,{eager: true})
    localidad: Localidad;

    @Column({type:'text', nullable: false})
    descripcion: string;

    @Column({type:'integer', nullable: true})
    zona: number;

}