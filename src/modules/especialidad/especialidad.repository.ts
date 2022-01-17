import { EntityRepository, Repository } from 'typeorm';
import { Especialidad } from './especialidad.entity';


@EntityRepository(Especialidad)
export class EspecialidadRepository extends Repository<Especialidad>{}