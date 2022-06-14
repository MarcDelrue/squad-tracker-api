import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import {User} from "../../users/schemas/user.schema";

export type SquadDocument = Squad & Document;

@Schema()
export class Squad {
  @Prop({ required: true })
  name: string;

  @Prop()
  maxUser: number;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  users: User[]
}

export const SquadSchema = SchemaFactory.createForClass(Squad);