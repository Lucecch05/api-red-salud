import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Rol } from '../role/role.entity';

@Entity('users')
export class User extends BaseEntity {

   @PrimaryGeneratedColumn('increment')
   id: number;

   @ManyToOne(() => Rol, (rol: Rol) => rol.users,{eager: true})
   rol: Rol;

   @Column({type: 'text', nullable: false})
   username: string;

   @Column({ type: 'text', nullable: false })
   password: string;


}