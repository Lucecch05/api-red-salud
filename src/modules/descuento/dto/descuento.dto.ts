import { IsNotEmpty } from "class-validator"


export class DescuentoDto {
    @IsNotEmpty()
    id_descuento:number;

    @IsNotEmpty()
    importe: number;

    @IsNotEmpty()
    porcentaje: number;

    @IsNotEmpty()
    caducidad: Date;

    @IsNotEmpty()
    observacion: string;

}