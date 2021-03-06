import { IsNotEmpty } from "class-validator"
import { Persona } from "../../persona/persona.entity";
import { Prestador } from "../../prestador/prestador.entity";

enum Tipo{
    Autorizacion = 'autorizacion',
    Orden_Medica = 'orden medica'
}

export class OrdenDto {
    @IsNotEmpty()
    id_orden:number;

    @IsNotEmpty()
    tipo: Tipo;

    @IsNotEmpty()
    fecha_creacion: Date;

    @IsNotEmpty()
    persona: Persona;

    @IsNotEmpty()
    prestador: Prestador;

}