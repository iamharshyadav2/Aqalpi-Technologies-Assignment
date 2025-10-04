# 🎟️ Event Booking API

A RESTful API to manage event creation and bookings. Built with **Node.js**, **Express.js**, **TypeScript**, and **MongoDB (Mongoose)**.

---

## 📦 Tech Stack

- **Backend**: Node.js + Express.js + TypeScript  
- **Database**: MongoDB (with Mongoose)  
- **Version Control**: Git + GitHub  

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/iamharshyadav2/Aqalpi-Technologies-Assignment.git
cd event-booking-api
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Add Environment Variables

```bash
Create a .env file in the root directory:

PORT=3000
MONGODB_URI=mongodb://localhost:27017/event-booking
```

### 4. Run the Server
```bash
npm run dev
```

## 📘API Endpoints

## ➕ Create New Event

```bash
Endpoint: POST /events

Description: Create a new event.

Request Body
{
    "name":"Tech Conference 2025",
    "date": "2025-11-30",
    "totalSeats":100
}

Response
{
    "name": "Tech Conference 2025",
    "date": "2025-11-30T00:00:00.000Z",
    "totalSeats": 100,
    "remainingSeats": 100,
    "_id": "68e0c1d1478ba1f21db4881e",
    "__v": 0
}
```

## 📅 Get Upcoming Events
```bash
Endpoint: GET /events

Description: Get list of all upcoming events.

Response
[
  {
        "_id": "68e0c1d1478ba1f21db4881e",
        "name": "Tech Conference 2025",
        "date": "2025-11-30T00:00:00.000Z",
        "totalSeats": 100,
        "remainingSeats": 100,
        "__v": 0
    }
]
```

## 🎫 Book Seats for an Event
```bash
Endpoint: POST /bookings

Description: Book seats for a specific event.

Request Body
{
    "eventId":"68dfe9b2f09ed24968d8a698",
    "userName":"Harsh Yadav",
    "seats":5
}

Success Response
{
    "event": "68dfe9b2f09ed24968d8a698",
    "userName": "Harsh Yadav",
    "seats": 5,
    "_id": "68e0c232478ba1f21db48822",
    "__v": 0
}

Possible Error Responses

• Event Not Found

{
  "error": "Event not found"
}


• Booking Past Event

{
  "error": "Cannot book past events"
}


• Not Enough Seats

{
  "error": "Not enough remaining seats"
}
```

## 📋 Get Bookings for an Event
```bash
Endpoint: GET /bookings/:eventId

Description: List all bookings for a specific event.

Example Request
GET /bookings/652fae50a8d0123abc456789

Response
[
    {
        "_id": "68dfea20f09ed24968d8a69c",
        "event": "68dfe9b2f09ed24968d8a698",
        "userName": "Harsh Yadav",
        "seats": 5,
        "__v": 0
    },
    {
        "_id": "68e0c232478ba1f21db48822",
        "event": "68dfe9b2f09ed24968d8a698",
        "userName": "Harsh Yadav",
        "seats": 5,
        "__v": 0
    }
]
```







