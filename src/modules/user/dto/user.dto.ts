import { IsNotEmpty } from "class-validator"
import { Rol } from "../../role/role.entity";

export class UserDto {
    @IsNotEmpty()
    id:number;

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    roles: Rol[];
    
}