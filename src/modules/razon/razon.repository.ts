import { EntityRepository, Repository } from 'typeorm';
import { Razon } from '../razon/razon.entity';


@EntityRepository(Razon)
export class RazonRepository extends Repository<Razon>{}