import { EntityRepository, Repository } from 'typeorm';
import { Prestador } from './prestador.entity';


@EntityRepository(Prestador)
export class PrestadorRepository extends Repository<Prestador>{}