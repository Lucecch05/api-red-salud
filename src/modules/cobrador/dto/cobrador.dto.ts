import { IsNotEmpty } from "class-validator"


export class CobradorDto {
    @IsNotEmpty()
    id_cobrador:number;

    @IsNotEmpty()
    nombre: string;

    @IsNotEmpty()
    apellido: string;

    @IsNotEmpty()
    telefono: string;

}