import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Afiliado } from "../afiliado/afiliado.entity";
import { Razon } from "../razon/razon.entity";
import { Caja } from "./caja.entity";

enum Accion{
    Apertura = 'apertura',
    Cierre = 'cierre',
    Ingreso = 'ingreso',
    Egreso = 'egreso'
}

@Entity('historiales_caja')
export class Historial_Caja extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id_historial_caja: number;
    
    @OneToOne(type=>Afiliado, {cascade: true, nullable: false, eager: true})
    @JoinColumn()
    afiliado: Afiliado;

    @OneToOne(type=>Razon, {cascade: true, nullable: false, eager: true})
    @JoinColumn()
    razon: Razon;

    @ManyToOne(() => Caja, (caja: Caja) => caja.historiales_caja)
    caja: Caja;

    @Column({type: 'text', nullable: false})
    accion: Accion;
    
    @Column({type: 'float', nullable: false})
    importe: number;

    @Column({type: 'text', nullable: false})
    fecha: string;
}