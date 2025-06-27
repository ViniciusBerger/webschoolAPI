# 📘 Course & Instructor Management API

## 📌 Overview

This RESTful API allows you to manage **courses** and **instructors** with full CRUD operations. It is built using **Express.js** and is structured to support easy integration with databases and frontend clients.

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### 📦 Installation

```bash
git clone (https://github.com/ViniciusBerger/webschoolAPI.git)
cd <project-directory>
npm install
```

### 🛠️ Run the Server

```bash
npm start
# or for development with hot-reloading (if nodemon is configured)
npm run dev
```

---

## 📡 API Endpoints

**Base URL:** `http://localhost:<PORT>/`

### 🔹 Course Routes

| Method | Endpoint           | Description                     |
|--------|--------------------|---------------------------------|
| GET    | /course            | Retrieve all courses            |
| GET    | /course/search     | Search for a course using query |
| POST   | /course/register   | Register a new course           |
| PUT    | /course/update     | Update an existing course       |
| DELETE | /course/delete     | Delete a course                 |

### 🔹 Instructor Routes

| Method | Endpoint              | Description                          |
|--------|-----------------------|--------------------------------------|
| GET    | /instructor           | Retrieve all instructors             |
| GET    | /instructor/search    | Search for an instructor using query |
| POST   | /instructor/register  | Register a new instructor            |
| PUT    | /instructor/update    | Update an existing instructor        |
| DELETE | /instructor/delete    | Delete an instructor                 |

---

## 📬 Sample Requests

### ➕ Register a Course

```http
POST /course/register
Content-Type: application/json

{
  "title": "Intro to Node.js",
  "description": "A beginner-friendly backend course",
  "instructorId": "12345"
}
```

### 🔍 Search for an Instructor

```http
GET /instructor/search?name=Jane
```

### 📝 Update a Course

```http
PUT /course/update
Content-Type: application/json

{
  "courseId": "abc123",
  "title": "Advanced Node.js",
  "description": "In-depth backend development with Node.js"
}
```

### ❌ Delete an Instructor

```http
DELETE /instructor/delete
Content-Type: application/json

{
  "instructorId": "789xyz"
}
```

---

## 🧱 Project Structure

```
├── controller/
│   ├── courseController.js
│   └── instructorController.js
├── routes/
│   ├── courseRoutes.js
│   └── instructorRoutes.js
├── server.js
├── package.json
└── README.md
```

---

## 📝 Notes

- Logic is handled in controllers; connect to a database like MongoDB for persistence.
- Each route handles proper validation and error responses.
- You can use Postman, Insomnia, or `curl` to test endpoints.
- Set up environment variables such as `PORT` in a `.env` file and load them using `dotenv`:

```bash
PORT=3000
```

## 📬 Contact

For any issues, suggestions, or contributions, feel free to open a GitHub issue or submit a pull request to this repository.
