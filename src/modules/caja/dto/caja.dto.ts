import { IsNotEmpty } from "class-validator"
import { User } from "src/modules/user/user.entity";
import { Historial_Caja } from "../historial_caja.entity";


export class CajaDto {
    @IsNotEmpty()
    id_caja:number;

    @IsNotEmpty()
    total: number;

    @IsNotEmpty()
    usuario: User;

    @IsNotEmpty()
    historiales_caja: Historial_Caja[];

}