import { IsNotEmpty } from "class-validator"
import { Afiliado } from "src/modules/afiliado/afiliado.entity";
import { Razon } from "src/modules/razon/razon.entity";
import { Caja } from "../caja.entity";

enum Accion{
    Apertura = 'apertura',
    Cierre = 'cierre',
    Ingreso = 'ingreso',
    Egreso = 'egreso'
}

export class Historial_CajaDto {
    @IsNotEmpty()
    id_historial_caja: number;

    @IsNotEmpty()
    accion: Accion;

    @IsNotEmpty()
    importe: number;

    @IsNotEmpty()
    fecha: Date;

    @IsNotEmpty()
    afiliado: Afiliado;

    @IsNotEmpty()
    razon: Razon;
    
    @IsNotEmpty()
    caja: Caja;

}