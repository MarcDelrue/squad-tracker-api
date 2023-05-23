import {Body, Controller, Get, Post, Request, UseGuards, ConflictException} from '@nestjs/common';
import {CreateUserDto} from "../users/dto/create-user.dto";
import * as bcrypt from "bcrypt";
import {UsersService} from "../users/users.service";
import {JwtAuthGuard} from "./jwt-auth.guard";
import {AuthService} from "./auth.service";
import {LocalAuthGuard} from "./local-auth.guard";

@Controller('auth')
export class AuthController {
    constructor(private usersService: UsersService, private authService: AuthService) {
    }

    @Post('/signup')
    async create(@Body() createUserDto: CreateUserDto) {
        if (await this.usersService.findByEmail(createUserDto.email))  {
            throw new ConflictException('email already used')
        }
        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(createUserDto.password, saltOrRounds);
        const result = await this.usersService.create(
            {...createUserDto, password: hashedPassword}
        );
        return {
            msg: 'User successfully registered',
            userId: result._id,
            userEmail: result.email
        };
    }

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @Get('/logout')
    logout(@Request() req): any {
        req.session.destroy();
        return {msg: 'The user session has ended'}
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
