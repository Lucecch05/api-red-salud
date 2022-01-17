import { EntityRepository, Repository } from 'typeorm';
import { Recibo } from './recibo.entity';


@EntityRepository(Recibo)
export class ReciboRepository extends Repository<Recibo>{}