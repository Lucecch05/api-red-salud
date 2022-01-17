import { IsNotEmpty } from "class-validator"
import { Barrio } from "src/modules/barrio/barrio.entity";


export class LocalidadDto {
    @IsNotEmpty()
    id_localidad:number;

    @IsNotEmpty()
    nombre: string;

    @IsNotEmpty()
    barrios: Barrio[];

}