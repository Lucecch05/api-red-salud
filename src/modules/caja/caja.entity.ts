import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../user/user.entity";
import { Historial_Caja } from "./historial_caja.entity";

@Entity('cajas')
export class Caja extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id_caja: number;

    @OneToOne(type=>User, {cascade: true, nullable: false, })
    @JoinColumn()
    usuario: User;

    @OneToMany(() => Historial_Caja, (historiales_caja: Historial_Caja) => historiales_caja.caja, {})
    historiales_caja: Historial_Caja[];

    @Column({type: 'float', nullable: false})
    total: number;
}