# 📝 Notes API

> Beginner Backend Project (Level 1)

## 🎯 Goal

Build a RESTful Notes API to learn the fundamentals of backend development using Express.js and MongoDB.

---

# 📚 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Nodemon

---

# 📂 Project Structure

```
notes-api/
│
├── src/
│   ├── config/
│   │    └── db.js
│   │
│   ├── controllers/
│   │    └── note.controller.js
│   │
│   ├── models/
│   │    └── note.model.js
│   │
│   ├── routes/
│   │    └── note.routes.js
│   │
│   ├── middlewares/
│   │    ├── error.middleware.js
│   │    └── notFound.middleware.js
│   │
│   ├── utils/
│   │
│   └── app.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

# 📦 Database Schema

## Note

| Field | Type | Required |
|--------|------|----------|
| title | String | ✅ |
| content | String | ✅ |
| createdAt | Date | Auto |
| updatedAt | Date | Auto |

---

# 🚀 Features

## 1. Create Note

### Endpoint

```
POST /api/notes
```

### Body

```json
{
    "title":"Learn Express",
    "content":"Today I learned CRUD operations."
}
```

### Validation

- Title is required
- Content is required
- Title should not be empty

---

## 2. Get All Notes

### Endpoint

```
GET /api/notes
```

### Features

- Return all notes
- Latest notes first

---

## 3. Get Note By ID

### Endpoint

```
GET /api/notes/:id
```

### Features

- Return a single note
- Return 404 if note doesn't exist

---

## 4. Update Note

### Endpoint

```
PUT /api/notes/:id
```

### Body

```json
{
    "title":"Updated Title",
    "content":"Updated Content"
}
```

### Features

- Update title
- Update content
- Return updated document

---

## 5. Delete Note

### Endpoint

```
DELETE /api/notes/:id
```

### Features

- Delete note
- Return success message

---

# 📖 What You'll Learn

## Express.js

- Express setup
- Middleware
- Routing
- Request & Response
- REST APIs

---

## MongoDB

- Collections
- Documents
- CRUD
- ObjectId

---

## Mongoose

- Schema
- Model
- Validation
- Timestamps

---

## Controllers

Learn how to separate business logic from routes.

---

## Routing

Organize API endpoints using Express Router.

---

## Error Handling

Learn how to

- Handle invalid IDs
- Handle missing resources
- Return proper status codes
- Create global error middleware

---

## Environment Variables

Store

- MongoDB URI
- Port Number

inside `.env`

---

# 📌 HTTP Status Codes

| Code | Meaning |
|------|----------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 404 | Not Found |
| 500 | Internal Server Error |

---

# 📂 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/notes | Create Note |
| GET | /api/notes | Get All Notes |
| GET | /api/notes/:id | Get Note |
| PUT | /api/notes/:id | Update Note |
| DELETE | /api/notes/:id | Delete Note |

---

# ⭐ Bonus Features (Optional)

- Search notes by title
- Pagination
- Sorting
- Filter by date
- Request logging
- Custom API responses
- Input sanitization

---

# 📚 Concepts Practiced

- REST API Design
- MVC Architecture
- CRUD Operations
- Express Routing
- Middleware
- Controllers
- MongoDB
- Mongoose
- Error Handling
- Validation
- Environment Variables

---

# 🏁 Final Outcome

After completing this project, you should be able to:

- Build a complete REST API
- Connect Express with MongoDB
- Design routes using MVC
- Write controllers
- Perform CRUD operations
- Handle errors professionally
- Structure backend projects correctly