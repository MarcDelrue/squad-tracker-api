import {NestFactory, } from "@nestjs/core";
import { ValidationPipe} from "@nestjs/common";
import {AppModule} from "./app.module";
import * as session from "express-session"
import * as passport from "passport"
import {jwtConstants} from "./auth/constants";

async function bootstrap() {
    // const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    //     AppModule,
    //     {
    //       transport: Transport.REDIS,
    //       options: {
    //         url: 'redis://delrue:9Pw7YS@M2w4f5JV@redis-18853.c3.eu-west-1-2.ec2.cloud.redislabs.com:18853',
    //       }
    //     }
    // );
    // await app.listen();
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    app.useGlobalPipes(new ValidationPipe());
    app.use(
        session({
            secret: jwtConstants.secret,
            resave: false,
            saveUninitialized: false,
        })
    )
    app.use(passport.initialize())
    app.use(passport.session())
    await app.listen(3000);
}

bootstrap();
