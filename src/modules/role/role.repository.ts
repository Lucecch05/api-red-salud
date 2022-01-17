import { EntityRepository, Repository } from 'typeorm';
import { Rol } from './role.entity';


@EntityRepository(Rol)
export class RolRepository extends Repository<Rol>{}