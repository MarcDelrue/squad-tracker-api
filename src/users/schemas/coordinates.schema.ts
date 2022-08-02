import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { now, Document } from "mongoose";

export type UserDocument = Coordinates & Document;

@Schema()
export class Coordinates {
  @Prop({ required: true })
  longitude: number;

  @Prop({ required: true })
  latitude: number;

  @Prop({ default: now() })
  createdAt: Date;

  @Prop({ default: now() })
  updatedAt: Date;
}

export const CoordinatesSchema = SchemaFactory.createForClass(Coordinates);
