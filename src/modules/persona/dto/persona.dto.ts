import { IsNotEmpty } from "class-validator"
import { Afiliado } from "src/modules/afiliado/afiliado.entity";
import { Orden } from "src/modules/orden/orden.entity";

enum Parentesco{
    Hermano = 'hermano/a',
    Padre = 'padre',
    Madre = 'madre',
    Hijo = 'hijo/a'
}

export class PersonaDto {
    @IsNotEmpty()
    id_persona:number;

    @IsNotEmpty()
    num_afiliado: number;

    @IsNotEmpty()
    nombre: string;

    @IsNotEmpty()
    apellido: string;

    @IsNotEmpty()
    fecha_creacion: Date;

    @IsNotEmpty()
    dni: number;

    @IsNotEmpty()
    parentesco: Parentesco;

    @IsNotEmpty()
    carencia: number;

    @IsNotEmpty()
    activo: number;

    @IsNotEmpty()
    ordenes: Orden[];

    @IsNotEmpty()
    afiliado: Afiliado;

}