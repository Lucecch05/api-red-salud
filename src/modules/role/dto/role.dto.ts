import { IsNotEmpty } from "class-validator"
import { User } from "../../user/user.entity";


export class RolDto {
    @IsNotEmpty()
    id_rol:number;

    @IsNotEmpty()
    descripcion: string;

    @IsNotEmpty()
    user: User;

}