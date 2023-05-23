import { now, Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Coordinates } from "./coordinates.schema";

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  alias: string;

  @Prop()
  color: string;

  @Prop([Number])
  roles: number[];

  @Prop()
  rank: number;

  @Prop()
  orientation: number;

  @Prop({ ref: "Coordinates" })
  coordinates: Coordinates;

  @Prop({ default: now() })
  createdAt: Date;

  @Prop({ default: now() })
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
