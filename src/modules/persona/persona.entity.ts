import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Afiliado } from "../afiliado/afiliado.entity";
import { Orden } from "../orden/orden.entity";

enum Parentesco{
    Hermano = 'hermano/a',
    Padre = 'padre',
    Madre = 'madre',
    Hijo = 'hijo/a'
}

@Entity('personas')
export class Persona extends BaseEntity{
    
    @PrimaryGeneratedColumn('increment')
    id_persona: number;

    @ManyToOne(() => Afiliado, (afiliado: Afiliado) => afiliado.personas)
    afiliado: Afiliado

    @OneToMany(() => Orden, (ordenes: Orden) => ordenes.persona, {nullable: true, })
    ordenes: Orden[];

    @Column({type: 'integer', nullable: false})
    num_afiliado: number;

    @Column({type: 'text', nullable: false})
    nombre: string;

    @Column({type: 'text', nullable: false})
    apellido: string;

    @Column({type: 'text', nullable: false})
    fecha_creacion: string;
    
    @Column({type: 'text', nullable: false})
    fecha_nacimiento: string;

    @Column({type: 'integer', nullable: false})
    dni: number;

    @Column({type: 'text'})
    parentesco: Parentesco;

    @Column({type: 'integer', nullable: false})
    carencia: number;

    @Column({type: 'tinyint',default: 1, nullable: false})
    activo: number;
}