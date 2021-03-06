import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthRepository } from './auth.repository';
import { JwtService } from '@nestjs/jwt';
import { SigninDto, SignupDto } from './dto';
import { User } from '../user/user.entity';
import { IJwtPayload } from './jwt-payload.interface';
import { compare } from 'bcryptjs';


@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(AuthRepository)
        private readonly _authRepository: AuthRepository,
        private readonly _jwtService: JwtService,
    ){}

    async signup(signupDto: SignupDto): Promise<void>{
        const {username } = signupDto;
        const userExists = await this._authRepository.findOne({
            where: [{username}],
        });

        if(userExists){
            throw new ConflictException('username already exists');
        }
        
        return this._authRepository.signup(signupDto);
    }

    async signin(signinDto: SigninDto): Promise<{token:string}>{
        const { username, password } = signinDto;

        const user: User = await this._authRepository.findOne({
            where: { username },
        });

        if(!user){
            throw new NotFoundException('user does not exist');
        }

        const isMatch = await compare(password, user.password);

        if(!isMatch){
            throw new UnauthorizedException('invalid credentials');
        }

        const payload: IJwtPayload ={
            id: user.id,
            username: user.username,
            rol: user.rol.descripcion
        }

        const token = await this._jwtService.sign(payload);

        return { token };
    }
}
