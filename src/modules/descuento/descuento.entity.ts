import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('descuentos')
export class Descuento extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id_descuento: number;

    @Column({type:'float', nullable: true})
    importe: number;

    @Column({type: 'integer', nullable: true})
    porcentaje: number;

    @Column({type:'text', nullable: false})
    caducidad: string;

    @Column({type:'text', nullable: false})
    observacion: string;
}