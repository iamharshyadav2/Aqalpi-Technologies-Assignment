
import mongoose, { Schema, Document } from "mongoose";

export interface IBooking extends Document {
  event: mongoose.Types.ObjectId;
  userName: string;
  seats: number;
}

const bookingSchema = new Schema<IBooking>({
  event: { type: Schema.Types.ObjectId, ref: "Event", required: true },
  userName: { type: String, required: true },
  seats: { type: Number, required: true },
});

export default mongoose.model<IBooking>("Booking", bookingSchema);
