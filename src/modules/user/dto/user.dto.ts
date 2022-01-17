import { IsNotEmpty } from "class-validator"
import { Rol } from "src/modules/role/role.entity";

export class UserDto {
    @IsNotEmpty()
    id:number;

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    rol: Rol;
    
}