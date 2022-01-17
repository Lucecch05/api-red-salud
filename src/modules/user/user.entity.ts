import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm'
import { Rol } from '../role/role.entity';

@Entity('users')
export class User extends BaseEntity {

   @PrimaryGeneratedColumn('increment')
   id: number;

   @OneToOne(type=>Rol, {cascade: true, nullable: false, eager: true})
   @JoinColumn()
   rol: Rol;

   @Column({type: 'varchar',unique: true, length: 25, nullable: false, name: 'usuario'})
   username: string;

   @Column({ type: 'varchar', length: 25, nullable: false })
   password: string;


}