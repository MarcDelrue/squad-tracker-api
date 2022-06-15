import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {SquadsModule} from './squads/squads.module';
import {UsersModule} from './users/users.module';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://MarcDelrue:LBNQ2TYgIiNT3EX9@cluster0.xwvkn.mongodb.net/?retryWrites=true&w=majority'),
    SquadsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
