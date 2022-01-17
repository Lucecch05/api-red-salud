import { IsNotEmpty } from "class-validator"


export class RazonDto {
    @IsNotEmpty()
    id_razon:number;

    @IsNotEmpty()
    descripcion: string;

}