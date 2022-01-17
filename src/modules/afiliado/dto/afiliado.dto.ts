import { IsNotEmpty } from "class-validator"
import { Cobrador } from "src/modules/cobrador/cobrador.entity";
import { Descuento } from "src/modules/descuento/descuento.entity";
import { Persona } from "src/modules/persona/persona.entity";
import { Plan } from "src/modules/plan/plan.entity";
import { Recibo } from "src/modules/recibo/recibo.entity";
import { Vendedor } from "src/modules/vendedor/vendedor.entity";
import { Detalle_Afiliado } from "../detalle_afilliado.entity";


export class AfiliadoDto {
    @IsNotEmpty()
    id_afiliado:number;

    @IsNotEmpty()
    fecha_creacion: Date;

    @IsNotEmpty()
    fecha_venta: Date;

    @IsNotEmpty()
    fecha_cobro: number;

    @IsNotEmpty()
    importe: number;

    @IsNotEmpty()
    estado: number;

    @IsNotEmpty()
    detalle: Detalle_Afiliado;

    @IsNotEmpty()
    descuento: Descuento;

    @IsNotEmpty()
    cobrador: Cobrador;

    @IsNotEmpty()
    vendedor: Vendedor;

    @IsNotEmpty()
    plan: Plan;

    @IsNotEmpty()
    personas: Persona[];

    @IsNotEmpty()
    recibos: Recibo[];

}