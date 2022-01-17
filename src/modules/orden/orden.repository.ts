import { EntityRepository, Repository } from 'typeorm';
import { Orden } from './orden.entity';


@EntityRepository(Orden)
export class OrdenRepository extends Repository<Orden>{}