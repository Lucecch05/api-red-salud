import { EntityRepository, Repository } from "typeorm";
import { Detalle_Afiliado } from "./detalle_afilliado.entity";

@EntityRepository(Detalle_Afiliado)
export class DetalleAfiliadoRepository extends Repository<Detalle_Afiliado>{}