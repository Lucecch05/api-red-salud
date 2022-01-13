import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

enum Estado {
   Active = 'active',
   Inactive = 'inactive'
}

@Entity('users')
export class User extends BaseEntity {

   @PrimaryGeneratedColumn('increment')
   id: number;

   @Column({type: 'varchar',unique: true, length: 25, nullable: false, name: 'usuario'})
   username: string;

   @Column({ type: 'varchar', length: 25, nullable: false })
   password: string;

   @Column({type: 'text'})
   estado: Estado;

}