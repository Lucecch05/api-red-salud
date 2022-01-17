import { IsNotEmpty } from "class-validator"


export class VendedorDto {
    @IsNotEmpty()
    id_vendedor:number;

    @IsNotEmpty()
    nombre: string;

    @IsNotEmpty()
    apellido: string;

    @IsNotEmpty()
    telefono: string;

}