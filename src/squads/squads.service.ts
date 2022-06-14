import { Injectable } from '@nestjs/common';
import { CreateSquadDto } from './dto/create-squad.dto';
import { UpdateSquadDto } from './dto/update-squad.dto';
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "../users/schemas/user.schema";
import {Model} from "mongoose";
import {Squad, SquadDocument} from "./schemas/squad.schema";
import {CreateUserDto} from "../users/dto/create-user.dto";

@Injectable()
export class SquadsService {

  constructor(@InjectModel(Squad.name) private squadModel: Model<SquadDocument>) {}

  create(createUserDto: CreateSquadDto): Promise<Squad> {
    const createdSquad = new this.squadModel(createUserDto);
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
