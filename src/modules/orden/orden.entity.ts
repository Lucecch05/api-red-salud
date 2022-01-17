import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Persona } from "../persona/persona.entity";
import { Prestador } from "../prestador/prestador.entity";

enum Tipo{
    Autorizacion = 'autorizacion',
    Orden_Medica = 'orden medica'
}

@Entity('ordenes')
export class Orden extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id_orden: number;

    @OneToOne(type=>Prestador, {cascade: true, nullable: false, eager: true})
    @JoinColumn()
    prestador: Prestador;

    @ManyToOne(() => Persona, (persona: Persona) => persona.ordenes)
    persona: Persona;

    @Column({type: 'text', nullable: false})
    tipo: Tipo;

    @Column({type: 'datetime', nullable: false})
    fecha_creacion: Date;
}