import { EntityRepository, Repository } from 'typeorm';
import { Cobrador } from './cobrador.entity';


@EntityRepository(Cobrador)
export class CobradorRepository extends Repository<Cobrador>{}