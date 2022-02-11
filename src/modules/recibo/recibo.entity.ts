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

    @ManyToOne(() => Afiliado, (afiliado: Afiliado) => afiliado.recibos,{eager: true})
    afiliado: Afiliado

    @Column({type: 'timestamp', nullable: false, default: () => 'CURRENT_TIMESTAMP'})
    fecha_creacion: Date;

    @Column({ type: 'timestamp', nullable: true})
    fecha_cobro: Date;

    @Column({type: 'text', nullable: false})
    mes_recibo: string

    @Column({type: 'text', nullable: false})
    anio_recibo: string
}