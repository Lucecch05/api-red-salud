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

    @ManyToOne(() => Prestador, (prestador: Prestador) => prestador.ordenes)
    prestador: Prestador;

    @ManyToOne(() => Persona, (persona: Persona) => persona.ordenes)
    persona: Persona;

    @Column({type: 'text', nullable: false})
    tipo: Tipo;

    @Column({type: 'timestamp', nullable: false, default: () => 'CURRENT_TIMESTAMP'})
    fecha_creacion: Date;
}