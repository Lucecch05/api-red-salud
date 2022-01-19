import { IsNotEmpty } from "class-validator"
import { Prestador } from "../../prestador/prestador.entity";


export class PrestacionDto {
    @IsNotEmpty()
    codigo_prestacion:number;

    @IsNotEmpty()
    descripcion: string;

    @IsNotEmpty()
    prestadores: Prestador[];

}