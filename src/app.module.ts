import { Module, CacheModule } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { SquadsModule } from "./squads/squads.module";
import { UsersModule } from "./users/users.module";
import { MongooseModule } from "@nestjs/mongoose";
import { CoordinatesModule } from "./coordinates/coordinates.module";
import { CoordinatesGateway } from "./coordinates/coordinates.gateway";

@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://MarcDelrue:LBNQ2TYgIiNT3EX9@cluster0.xwvkn.mongodb.net/?retryWrites=true&w=majority"
    ),
    CacheModule.register(),
    SquadsModule,
    UsersModule,
    CoordinatesModule,
  ],
  controllers: [AppController],
  providers: [AppService, CoordinatesGateway],
})
export class AppModule {}
