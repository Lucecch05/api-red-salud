import { EntityRepository, Repository } from 'typeorm';
import { Vendedor } from './vendedor.entity';



@EntityRepository(Vendedor)
export class VendedorRepository extends Repository<Vendedor>{}