import {Module} from "@nestjs/common";
import {CacheModule} from '@nestjs/cache-manager';
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {SquadsModule} from "./squads/squads.module";
import {UsersModule} from "./users/users.module";
import {MongooseModule} from "@nestjs/mongoose";
import {CoordinatesModule} from "./coordinates/coordinates.module";
import {AuthModule} from './auth/auth.module';
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
        }),
        MongooseModule.forRoot(
            "mongodb+srv://MarcDelrue:LBNQ2TYgIiNT3EX9@cluster0.xwvkn.mongodb.net/?retryWrites=true&w=majority"
        ),
        CacheModule.register(),
        SquadsModule,
        UsersModule,
        CoordinatesModule,
        AuthModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
