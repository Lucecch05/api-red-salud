import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Afiliado } from "../afiliado/afiliado.entity";
import { Historial_Caja } from "../caja/historial_caja.entity";

@Entity('recibos')
export class Recibo extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id_recibo: number;

    @OneToOne(type=>Historial_Caja, {cascade: true, nullable: true, })
    @JoinColumn()
    historial_caja: Historial_Caja;

    @ManyToOne(() => Afiliado, (afiliado: Afiliado) => afiliado.recibos)
    afiliado: Afiliado

    @Column({type: 'text', nullable: false})
    fecha_creacion: string;

    @Column({type: 'text', nullable: false})
    fecha_cobro: string;

    @Column({type: 'text', nullable: false})
    mes_recibo: string

    @Column({type: 'text', nullable: false})
    anio_recibo: string
}