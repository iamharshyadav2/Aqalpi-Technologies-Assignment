import { Request, Response } from "express";
import Booking from "../models/Booking.model.ts";
import Event from "../models/Event.model.ts";
import mongoose from "mongoose";

export const bookSeats = async (req: Request, res: Response) => {
  try {
    const { eventId, userName, seats } = req.body;

    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ error: "Event not found" });

    if (event.date < new Date())
      return res.status(400).json({ error: "Cannot book past events" });

    if (seats <= 0) {
      return res.status(400).json({ message: 'seatsBooked must be greater than zero' });
    }

    if (seats > event.remainingSeats)
      return res
        .status(400)
        .json({ error: "Not enough seats available" });

   
    const booking = new  Booking({ event: eventId, userName, seats });

    await booking.save();

    
    event.remainingSeats -= seats;
    await event.save();

    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ error: "Failed to book seats" });
  }
};


export const listBookingsForEvent = async (req: Request, res: Response) => {
  try {
    const { eventId } = req.params;

      if (!mongoose.Types.ObjectId.isValid(eventId)) {
      return res.status(400).json({ message: 'Invalid event ID' });
    }

    const bookings = await Booking.find({ event: eventId });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
};
