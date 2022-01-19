import { EntityRepository, getConnection, Repository } from "typeorm";
import { Rol } from "../role/role.entity";
import { RolRepository } from "../role/role.repository";
import { User } from "../user/user.entity";
import { SignupDto } from "./dto";
import { genSalt, hash } from 'bcryptjs';


@EntityRepository(User)
export class AuthRepository extends Repository<User>{

    async signup(SignupDto: SignupDto){
        const {username,password} = SignupDto;
        const user = new User();
        user.username = username;
        
        const rolRepository: RolRepository = await getConnection().getRepository(Rol);
        const defaultRol: Rol = await rolRepository.findOne({where: {descripcion: 'GENERAL'}});

        const salt = await genSalt(10);
        user.password = await hash(password,salt);
        user.rol = defaultRol;
        
        await user.save();
        
    }
}