import { EntityRepository, Repository } from 'typeorm';
import { Prestacion } from './prestacion.entity';


@EntityRepository(Prestacion)
export class PrestacionRepository extends Repository<Prestacion>{}