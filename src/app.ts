import express from "express";
import dotenv from "dotenv";
import eventRoutes from "./routes/event.routes.ts";
import bookingRoutes from "./routes/booking.routes.ts";
import dbConfiguration from "./utils/dbConfig.ts";

dotenv.config();

dbConfiguration();

const app = express();
app.use(express.json());

app.use("/events", eventRoutes);
app.use("/bookings", bookingRoutes);

app.get("/healthCheck", (req, res) => {
  res.status(200).send("Server is Running Up");
});

export default app;
