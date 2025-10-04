
import { Request, Response } from "express";
import Event from "../models/Event.model.ts";

export const createEvent = async (req: Request, res: Response) => {
  try {
    const { name, date, totalSeats } = req.body;

     if (!name || !date || !totalSeats) {
      console.log(name);
      return res.status(400).json({ message: 'Missing required fields' });
    }
    const event = new Event({
      name,
      date,
      totalSeats,
      remainingSeats: totalSeats,
    });

    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ error: "Failed to create event" });
  }
};



export const listUpcomingEvents = async (_req: Request, res: Response) => {
  try {
    const today = new Date();
    const events = await Event.find({ date: { $gte: today } }).sort({ date: 1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch events" });
  }
};

