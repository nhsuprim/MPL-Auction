"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userControllers = void 0;
const user_services_1 = require("./user.services");
const createAdmin = async (req, res, next) => {
    try {
        const result = await user_services_1.userServices.createAdmin(req);
        res.status(200).json({
            success: true,
            message: "Admin created successfully",
            data: result,
        });
    }
    catch (error) {
        next(error); // Forward the error to error-handling middleware
    }
};
const createCaptain = async (req, res, next) => {
    try {
        const result = await user_services_1.userServices.createCaptain(req);
        res.status(200).json({
            success: true,
            message: "Captain created successfully",
            data: result,
        });
    }
    catch (error) {
        next(error); // Forward the error to error-handling middleware
    }
};
const createPlayer = async (req, res, next) => {
    try {
        const result = await user_services_1.userServices.createPlayer(req);
        res.status(200).json({
            success: true,
            message: "Player created successfully",
            data: result,
        });
    }
    catch (error) {
        next(error); // Forward the error to error-handling middleware
    }
};
const getAdmin = async (req, res, next) => {
    try {
        const result = await user_services_1.userServices.getAdmin();
        res.status(200).json({
            success: true,
            message: "Admin retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        next(error); // Forward the error to error-handling middleware
    }
};
exports.userControllers = {
    createAdmin,
    createCaptain,
    createPlayer,
    getAdmin,
};
