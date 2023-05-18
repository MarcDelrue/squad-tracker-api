import {Module} from '@nestjs/common';
import {SquadsService} from './squads.service';
import {SquadsController} from './squads.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Squad, SquadSchema} from "./schemas/squad.schema";
import {UsersService} from "../users/users.service";
import {User, UserSchema} from "../users/schemas/user.schema";

@Module({
    imports: [MongooseModule.forFeature([
        {name: Squad.name, schema: SquadSchema},
        {
            name: User.name,
            schema: UserSchema
        }])],
    controllers: [SquadsController],
    providers: [SquadsService, UsersService]
})
export class SquadsModule {
}
