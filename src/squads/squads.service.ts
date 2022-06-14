import { Injectable } from '@nestjs/common';
import { CreateSquadDto } from './dto/create-squad.dto';
import { UpdateSquadDto } from './dto/update-squad.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Squad, SquadDocument} from "./schemas/squad.schema";

@Injectable()
export class SquadsService {

  constructor(@InjectModel(Squad.name) private squadModel: Model<SquadDocument>) {}

  create(createSquadDto: CreateSquadDto): Promise<Squad> {
    const createdSquad = new this.squadModel(createSquadDto);
    return createdSquad.save();
  }

  findAll() {
    return `This action returns all squads`;
  }

  findOne(id: number) {
    return `This action returns a #${id} squad`;
  }

  update(id: number, updateSquadDto: UpdateSquadDto) {
    return `This action updates a #${id} squad`;
  }

  remove(id: number) {
    return `This action removes a #${id} squad`;
  }
}
