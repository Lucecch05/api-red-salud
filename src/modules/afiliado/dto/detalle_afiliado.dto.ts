import { IsNotEmpty } from "class-validator"
import { Barrio } from "src/modules/barrio/barrio.entity";
import { Afiliado } from "../afiliado.entity";


export class Detalle_AfiliadoDto {
    @IsNotEmpty()
    id_detalle:number;

    @IsNotEmpty()
    calle: string;

    @IsNotEmpty()
    numero: number;

    @IsNotEmpty()
    observacion: string;

    @IsNotEmpty()
    barrio: Barrio;

    @IsNotEmpty()
    afiliado: Afiliado;

}