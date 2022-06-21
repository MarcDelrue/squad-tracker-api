import {Injectable} from '@nestjs/common';
import {CreateSquadDto} from './dto/create-squad.dto';
import {UpdateSquadDto} from './dto/update-squad.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Squad, SquadDocument} from "./schemas/squad.schema";

@Injectable()
export class SquadsService {

  constructor(@InjectModel(Squad.name) private squadModel: Model<SquadDocument>) {
  }

  create(createSquadDto: CreateSquadDto): Promise<Squad> {
    const createdSquad = new this.squadModel(createSquadDto);
    return createdSquad.save();
  }

  async findAll(): Promise<SquadDocument[]> {
    return await this.squadModel.find().exec();
  }

  async findOne(id: string): Promise<SquadDocument> {
    return await this.squadModel.findById(id).exec();
  }

  async update(id: string, updateSquadDto: UpdateSquadDto): Promise<SquadDocument> {
    return this.squadModel.findByIdAndUpdate(id, updateSquadDto, {new: true});
  }

  async remove(id: string): Promise<SquadDocument> {
    return this.squadModel.findByIdAndRemove(id);
  }
}
