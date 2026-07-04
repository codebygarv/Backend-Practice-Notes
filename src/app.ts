import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import connectToDb from "./config/db.js";
import notesRoute from "./routes/notes.routes.ts"

// env configuration
dotenv.config();

const app = express();

// connection to Database
connectToDb(); // call this into our main file 

//midlewares
app.use(cors());
app.use(helmet()); // Middleware for secure headers
if (process.env.LOCAL_RUN === "development") {
    app.use(morgan("dev"));
} else {
    app.use(morgan("combined"));
}

// middlewares 
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// define routes 

app.use("/api/v1", notesRoute);

// health route
app.get('/health', (req: Request, res: Response) => {
    res.send({
        success: true,
        message: "API is working ✅"
    })
})

export default app;