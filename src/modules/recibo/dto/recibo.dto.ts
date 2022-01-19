import { IsNotEmpty } from "class-validator"
import { Afiliado } from "../../afiliado/afiliado.entity";
import { Historial_Caja } from "../../caja/historial_caja.entity";


export class ReciboDto {
    @IsNotEmpty()
    id_recibo:number;

    @IsNotEmpty()
    fecha_creacion: Date;

    @IsNotEmpty()
    fecha_cobro: Date;

    @IsNotEmpty()
    mes_recibo: string;

    @IsNotEmpty()
    anio_recibo: string;

    @IsNotEmpty()
    historial_caja: Historial_Caja;

    @IsNotEmpty()
    afiliado: Afiliado;
}