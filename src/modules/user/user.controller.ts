import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../role/decorators/role.decorator';
import { RoleGuard } from '../role/guards/role.guard';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly _userService: UserService){}

        @Get(':id')
        @Roles('CAJA','ADMIN')
        @UseGuards(AuthGuard(),RoleGuard)
        async getUser(@Param('id',ParseIntPipe) id: number): Promise<User>{
            const user = await this._userService.get(id);
            return user;
          
        }

        @Get()
        @Roles('ADMIN')
        @UseGuards(AuthGuard(), RoleGuard)  //Para que solo puedan usarlos los usuarios registrados
        async getUsers(): Promise<User[]>{
            const users: User[] = await this._userService.getAll();
            return users;
        }

        @Post()
        async createUser(@Body() user: User): Promise<User>{
           const createdUser = await this._userService.create(user);
           return createdUser;

        }

        @Patch(':id')
        async updateUser(@Param('id',ParseIntPipe) id: number, @Body() user: User){
           await this._userService.update(id, user);
            return true;
        }

        @Delete(':id')
        async deleteUser(@Param('id',ParseIntPipe) id: number){
            await this._userService.delete(id);
            return true;
        }

        @Post('setRol/:userId/:rolId')
        async setRolToUser(
            @Param('userId', ParseIntPipe) userId: number, 
            @Param('rolId', ParseIntPipe) rolId: number
        ){

            return this._userService.setRolToUser(userId,rolId);
        }

}
