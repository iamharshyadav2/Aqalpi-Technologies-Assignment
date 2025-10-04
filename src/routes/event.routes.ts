import express from "express";
import { createEvent, listUpcomingEvents } from "../controllers/event.controller.ts";

const router = express.Router();

router.post("/", createEvent);
router.get("/", listUpcomingEvents);

export default router;
