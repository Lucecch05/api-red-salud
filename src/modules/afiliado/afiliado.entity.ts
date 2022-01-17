import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToOne, OneToMany, JoinColumn } from "typeorm";
import { Cobrador } from "../cobrador/cobrador.entity";
import { Descuento } from "../descuento/descuento.entity";
import { Persona } from "../persona/persona.entity";
import { Plan } from "../plan/plan.entity";
import { Recibo } from "../recibo/recibo.entity";
import { Vendedor } from "../vendedor/vendedor.entity";
import { Detalle_Afiliado } from "./detalle_afilliado.entity";


@Entity('afiliados')
export class Afiliado extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id_afiliado: number;

    @OneToOne(type=>Detalle_Afiliado, {cascade: true, nullable: false, eager: true})
    @JoinColumn()
    detalle: Detalle_Afiliado;

    @OneToOne(type=>Descuento, {cascade: true, nullable: true})
    @JoinColumn()
    descuento: Descuento;

    @OneToOne(type=>Cobrador, {cascade: true, nullable: false, eager: true})
    @JoinColumn()
    cobrador: Cobrador;

    @OneToOne(type=>Vendedor, {cascade: true, nullable: false, eager: true})
    @JoinColumn()
    vendedor: Vendedor;

    @OneToOne(type=>Plan, {cascade: true, nullable: false, eager: true})
    @JoinColumn()
    plan: Plan;

    @OneToMany(() => Persona, (personas: Persona) => personas.afiliado)
    personas: Persona[];

    @OneToMany(() => Recibo, (recibos: Recibo) => recibos.afiliado)
    recibos: Recibo[];

    @Column({type: 'timestamp', nullable: false})
    fecha_creacion: Date;

    @Column({type: 'timestamp', nullable: false})
    fecha_venta: Date;

    @Column({type: 'integer', nullable: false})
    fecha_cobro: number;

    @Column({type:'integer', nullable: false})
    importe: number;

    @Column({type: 'tinyint', default: 1})
    estado: number;


}