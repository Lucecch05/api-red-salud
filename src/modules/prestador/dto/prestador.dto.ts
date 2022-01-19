import { IsNotEmpty } from "class-validator"
import { Especialidad } from "../../especialidad/especialidad.entity";
import { Prestacion } from "../../prestacion/prestacion.entity";

enum Formato{
    Abona_Prestador = 'abona en prestador',
    Abona_Centro_Medico = 'abona en centro medico'
}

export class PrestadorDto {
    @IsNotEmpty()
    id_prestador:number;

    @IsNotEmpty()
    proveedor: string;

    @IsNotEmpty()
    formato: Formato;

    @IsNotEmpty()
    nombre_medico: string;

    @IsNotEmpty()
    horario: string;

    @IsNotEmpty()
    domicilio: string;

    @IsNotEmpty()
    telefono: string;

    @IsNotEmpty()
    monto_red_salud: number;

    @IsNotEmpty()
    importe: number;

    @IsNotEmpty()
    especialidad: Especialidad;
    
    @IsNotEmpty()
    prestaciones: Prestacion[];

}