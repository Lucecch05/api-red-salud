import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToOne, OneToMany, JoinColumn, ManyToOne } from "typeorm";
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

    @OneToOne(()=>Detalle_Afiliado, {cascade: true, nullable: false, eager: true})
    @JoinColumn({name: 'id_detalle'})
    detalle: Detalle_Afiliado;

    @OneToOne(()=>Descuento, {cascade: true, nullable: true, eager: true})
    @JoinColumn()
    descuento: Descuento;

    @ManyToOne(() => Cobrador, (cobrador: Cobrador) => cobrador.afiliados, {eager: true})
    cobrador: Cobrador;

    @ManyToOne(() => Vendedor, (vendedor: Vendedor) => vendedor.afiliados, {eager: true})
    vendedor: Vendedor;

    @ManyToOne(() => Plan, (plan: Plan) => plan.afiliados, {eager: true})
    plan: Plan;

    @OneToMany(() => Persona, (personas: Persona) => personas.afiliado, {cascade: true, eager: true})
    personas: Persona[];

    @OneToMany(() => Recibo, (recibos: Recibo) => recibos.afiliado)
    recibos: Recibo[];

    @Column({type: 'timestamp', nullable: false, default: () => 'CURRENT_TIMESTAMP'})
    fecha_creacion: Date;

    @Column({ type: 'timestamp', nullable: false, default: () => 'CURRENT_TIMESTAMP'})
    fecha_venta: Date;

    @Column({type: 'integer', nullable: false})
    fecha_cobro: number;

    @Column({type:'integer', nullable: false})
    importe: number;

    @Column({type: 'tinyint', default: 1})
    estado: number;

    @Column({ type:'text', nullable: false})
    telefono: string;
}