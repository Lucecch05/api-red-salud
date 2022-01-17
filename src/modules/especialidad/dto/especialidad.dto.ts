import { IsNotEmpty } from "class-validator"


export class EspecialidadDto {
    @IsNotEmpty()
    id_especialidad:number;

    @IsNotEmpty()
    descripcion: string;

}