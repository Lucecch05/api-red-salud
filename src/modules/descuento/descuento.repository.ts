import { EntityRepository, Repository } from 'typeorm';
import { Descuento } from './descuento.entity';


@EntityRepository(Descuento)
export class DescuentoRepository extends Repository<Descuento>{}