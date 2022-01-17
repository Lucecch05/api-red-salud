import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('vendedores')
export class Vendedor extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id_vendedor: number;

    @Column({type: 'varchar', length: 15, nullable: false})
    nombre: string;

    @Column({type:'varchar', length: 20, nullable: false})
    apellido: string;

    @Column({type:'text', nullable: false})
    telefono: string;

}