import { EntityRepository, Repository } from 'typeorm';
import { Localidad } from './localidad.entity';


@EntityRepository(Localidad)
export class LocalidadRepository extends Repository<Localidad>{}