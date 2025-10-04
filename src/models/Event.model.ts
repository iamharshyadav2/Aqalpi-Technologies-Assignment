
import mongoose, { Schema, Document } from "mongoose";

export interface IEvent extends Document {
  name: string;
  date: Date;
  totalSeats: number;
  remainingSeats: number;
}

const eventSchema = new Schema<IEvent>({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  totalSeats: { type: Number, required: true },
  remainingSeats: { type: Number, required: true },
});

export default mongoose.model<IEvent>("Event", eventSchema);
