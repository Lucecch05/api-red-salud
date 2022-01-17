import { IsNotEmpty } from "class-validator"


export class RolDto {
    @IsNotEmpty()
    id_rol:number;

    @IsNotEmpty()
    descripcion: string;

}