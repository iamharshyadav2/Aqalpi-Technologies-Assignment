import express from "express";
import { bookSeats, listBookingsForEvent } from "../controllers/booking.controller.ts";

const router = express.Router();

router.post("/", bookSeats);
router.get("/:eventId", listBookingsForEvent);

export default router;
