import { IsNotEmpty } from "class-validator"


export class PlanDto {
    @IsNotEmpty()
    id_plan:number;

    @IsNotEmpty()
    descripcion: string;

    @IsNotEmpty()
    precio: number;
}