import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {SquadsModule} from './squads/squads.module';
import {UsersModule} from './users/users.module';
import {MongooseModule} from '@nestjs/mongoose';
import {User, UserSchema} from "./users/schemas/user.schema";
import {Squad, SquadSchema} from "./squads/schemas/squad.schema";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://MarcDelrue:LBNQ2TYgIiNT3EX9@cluster0.xwvkn.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
    MongooseModule.forFeature([{name: Squad.name, schema: SquadSchema}]),
    SquadsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
