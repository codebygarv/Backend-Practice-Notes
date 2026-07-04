import { Request, Response } from "express";
import note from "../models/notesModel.js";


export const getAllNotesController = async (req: Request, res: Response) => {
    try {
        const notesData = await note.find();

        res.status(200).json({
            success: true,
            message: "Notes Find Successfulyy",
            data: {
                notesData
            }
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: {
                error
            }
        })
    }
}

export const addNewNotesController = async (req: Request, res: Response) => {
    try {
        const { title, content } = req.body;

        const notesData = await note.create({
            title,
            content
        })

        res.status(200).json({
            success: true,
            message: "Notes Added Successfulyy",
            data: {
                notesData
            }
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: {
                error
            }
        })
    }

}

export const getNotesByIdController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const notesData = await note.findById(id);

        res.status(200).json({
            success: true,
            message: "Note Find Successfulyy",
            data: {
                notesData
            }
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: {
                error
            }
        })
    }
}

export const updateNotesController = async (req: Request, res: Response) => {
    try {
        const { title, content } = req.body;
        const { id } = req.params;

        const notesData = await note.findByIdAndUpdate(id, {
            title,
            content
        })

        res.status(200).json({
            success: true,
            message: "Notes Updated Successfulyy",
            data: {
                notesData
            }
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: {
                error
            }
        })
    }

}

export const deleteotesController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const notesData = await note.findByIdAndDelete(id)

        res.status(200).json({
            success: true,
            message: "Notes Deleted Successfulyy",
            data: {
                notesData
            }
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: {
                error
            }
        })
    }

}