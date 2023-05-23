import {Injectable, NotAcceptableException} from '@nestjs/common';
import {UsersService} from "../users/users.service";
import * as bcrypt from 'bcrypt';
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService,
                private jwtService: JwtService) {
    }

    async signIn(email: string, pass: string): Promise<any> {
        const user = await this.usersService.findByEmail(email);
        if (!user) {
            throw new NotAcceptableException('could not find the user');
        }
        const passwordValid = await bcrypt.compare(pass, user.password)

        if (user && passwordValid) {
            return user;
        }
        return null;
    }

    async login(user: any) {
        const payload = { email: user.email, username: user.username, sub: user._id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

}
