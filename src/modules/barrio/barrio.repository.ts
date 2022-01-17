import { EntityRepository, Repository } from 'typeorm';
import { Barrio } from './barrio.entity';


@EntityRepository(Barrio)
export class BarrioRepository extends Repository<Barrio>{}