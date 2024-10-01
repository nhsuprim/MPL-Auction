import { NextFunction, Request, Response } from "express";
import { userServices } from "./user.services";

const createAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await userServices.createAdmin(req);
        res.status(200).json({
            success: true,
            message: "Admin created successfully",
            data: result,
        });
    } catch (error) {
        next(error); // Forward the error to error-handling middleware
    }
};

const createCaptain = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const result = await userServices.createCaptain(req);
        res.status(200).json({
            success: true,
            message: "Captain created successfully",
            data: result,
        });
    } catch (error) {
        next(error); // Forward the error to error-handling middleware
    }
};

const createPlayer = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const result = await userServices.createPlayer(req);
        res.status(200).json({
            success: true,
            message: "Player created successfully",
            data: result,
        });
    } catch (error) {
        next(error); // Forward the error to error-handling middleware
    }
};

const getAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await userServices.getAdmin();
        res.status(200).json({
            success: true,
            message: "Admin retrieved successfully",
            data: result,
        });
    } catch (error) {
        next(error); // Forward the error to error-handling middleware
    }
};

export const userControllers = {
    createAdmin,
    createCaptain,
    createPlayer,
    getAdmin,
};
