import { Request, Response } from "express";
import { CustomError } from "../../../app/error/custom.error";
import { MiddlewareInterface } from "../../../app/interfaces/middleware.interface";

export const serverErrorMiddleware: MiddlewareInterface = {
    execute: (error: CustomError<unknown>, req: Request, res: Response) => {
        const statusCode: number = error.statusCode || 500;
        const message: string = error.message;
        const stackError = error.stack;

        res.status(statusCode).json({
            error: {
                name: error.name,
                message: message,
                statusCode: statusCode,
                info: error.erroProps,
                stack: stackError
            }
        });
    }
}