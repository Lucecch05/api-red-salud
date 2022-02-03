import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Afiliado } from "../afiliado/afiliado.entity";

@Entity('vendedores')
export class Vendedor extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id_vendedor: number;

    @OneToMany(() => Afiliado, (afiliados: Afiliado) => afiliados.vendedor ,{eager: true})
    afiliados: Afiliado[];

    @Column({type: 'varchar', length: 15, nullable: false})
    nombre: string;

    @Column({type:'varchar', length: 20, nullable: false})
    apellido: string;

    @Column({type:'text', nullable: false})
    telefono: string;

}