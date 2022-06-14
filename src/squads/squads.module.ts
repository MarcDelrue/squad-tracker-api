import { Module } from '@nestjs/common';
import { SquadsService } from './squads.service';
import { SquadsController } from './squads.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Squad, SquadSchema} from "./schemas/squad.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Squad.name, schema: SquadSchema }])],
  controllers: [SquadsController],
  providers: [SquadsService]
})
export class SquadsModule {}
