import { EntityRepository, Repository } from 'typeorm';
import { Caja } from './caja.entity';


@EntityRepository(Caja)
export class CajaRepository extends Repository<Caja>{}