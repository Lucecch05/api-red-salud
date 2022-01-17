import { EntityRepository, Repository } from 'typeorm';
import { Afiliado } from './afiliado.entity';


@EntityRepository(Afiliado)
export class AfiliadoRepository extends Repository<Afiliado>{}