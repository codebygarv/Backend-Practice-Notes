
import { Router } from "express";
import { addNewNotesController, deleteotesController, getAllNotesController, getNotesByIdController, updateNotesController } from "../controllers/notes.controller.ts";

const router = Router()

router.get("/notes", getAllNotesController);
router.get("/notes/:id", getNotesByIdController)
router.post("/notes", addNewNotesController);
router.put("/notes/:id", updateNotesController);
router.delete("/notes/:id", deleteotesController);

export default router;