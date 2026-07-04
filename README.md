# 📝 NoteFlow - Notes API

A RESTful Notes API built to perform basic CRUD operations using Express.js and MongoDB. This project provides a simple backend foundation for a notes application.

---

## 📚 Tech Stack

- **Node.js** & **TypeScript** - Runtime and Language
- **Express.js** - Web Framework
- **MongoDB** & **Mongoose** - Database and ODM
- **dotenv** - Environment Variable Management
- **Cors** & **Helmet** & **Morgan** - Middlewares for Security and Logging
- **@codebygarv/express-lens** - Express Route Monitoring

---

## 🚀 Features

### 1. Create Note
- **Endpoint:** `POST /api/v1/notes`
- **Description:** Adds a new note to the database.

### 2. Get All Notes
- **Endpoint:** `GET /api/v1/notes`
- **Description:** Retrieves all saved notes.

### 3. Get Note By ID
- **Endpoint:** `GET /api/v1/notes/:id`
- **Description:** Retrieves a single note by its ID.

### 4. Update Note
- **Endpoint:** `PUT /api/v1/notes/:id`
- **Description:** Updates the title and content of an existing note.

### 5. Delete Note
- **Endpoint:** `DELETE /api/v1/notes/:id`
- **Description:** Deletes a note by its ID.

---

## 📂 Project Structure

```
noteflow/
│
├── src/
│   ├── config/
│   │    └── db.ts             # Database connection setup
│   │
│   ├── controllers/
│   │    └── notes.controller.ts # Business logic for notes
│   │
│   ├── models/
│   │    └── notesModel.ts       # Mongoose schema and model
│   │
│   ├── routes/
│   │    └── notes.routes.ts     # Express routes
│   │
│   ├── middlewares/             # Custom middlewares (if any)
│   │
│   ├── app.ts                   # Express app configuration
│   └── server.ts                # Server entry point
│
├── .env                         # Environment variables
├── package.json                 # Project dependencies and scripts
├── tsconfig.json                # TypeScript configuration
└── README.md                    # Project documentation
```

---

## ⚙️ Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/) installed on your machine.

### Installation

1. **Clone the repository** (if applicable) or download the project files.
2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env` file in the root directory and configure your MongoDB connection and Port:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   LOCAL_RUN=development
   ```

4. **Run the Server:**
   You can run the server in development mode using `tsx` or `ts-node-dev`:
   ```bash
   npx tsx src/server.ts
   ```

---

## 📌 HTTP Status Codes Used

| Code | Meaning |
|------|----------|
| 200 | OK / Success |
| 500 | Internal Server Error |

---

## 📖 Learnings

By exploring this project, you can understand:
- How to structure a Node.js + Express backend with TypeScript.
- The Model-View-Controller (MVC) architecture (using Routes, Controllers, and Models).
- How to perform basic CRUD operations with MongoDB and Mongoose.
- The use of middlewares like `cors`, `helmet`, and `morgan`.
- Handling errors and returning appropriate JSON responses.
