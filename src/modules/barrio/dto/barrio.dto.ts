import { IsNotEmpty } from "class-validator"
import { Localidad } from "src/modules/localidad/localidad.entity";


export class BarrioDto {
    @IsNotEmpty()
    id_barrio:number;

    @IsNotEmpty()
    descripcion: string;

    @IsNotEmpty()
    localidad: Localidad;

}