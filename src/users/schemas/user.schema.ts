import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop()
  color: string;

  @Prop()
  roles: string[];

  @Prop()
  rank: string;

  @Prop()
  orientation: number;

  @Prop()
  longitude: string;

  @Prop()
  latitude: string;
}

export const UserSchema = SchemaFactory.createForClass(User);