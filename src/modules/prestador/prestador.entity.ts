import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Especialidad } from "../especialidad/especialidad.entity";
import { Orden } from "../orden/orden.entity";
import { Prestacion } from "../prestacion/prestacion.entity";

enum Formato{
    Abona_Prestador = 'abona en prestador',
    Abona_Centro_Medico = 'abona en centro medico'
}

@Entity('prestadores')
export class Prestador extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id_prestador: number;

    @ManyToOne(() => Especialidad, (especialidad: Especialidad) => especialidad.prestadores)
    especialidad: Especialidad;

    @ManyToMany(() => Prestacion, prestacion => prestacion.prestadores,{eager:true})
    @JoinTable({name: 'prestador_prestacion'})
    prestaciones: Prestacion[];

    @OneToMany(() => Orden, (ordenes: Orden) => ordenes.prestador)
    ordenes: Orden[];

    @Column({type:'text', nullable: false})
    proveedor: string;

    @Column({type:'text', nullable: false})
    formato: Formato;

    @Column({type:'text', nullable: false})
    nombre_medico: string;

    @Column({type:'text', nullable: false})
    horario: string;

    @Column({type:'text', nullable: false})
    domicilio: string;

    @Column({type:'text', nullable: false})
    telefono: string;

    @Column({type:'float', nullable: false})
    monto_red_salud: number;

    @Column({type:'float', nullable: false})
    importe: number;
}