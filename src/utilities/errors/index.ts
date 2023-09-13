import { CustomErrorBase } from "./types";

export function createCustomError(name: string, message: string, statusCode: number, isOperational: boolean = true): CustomErrorBase {
    return { name, message, statusCode, isOperational };
}

export const NotFoundError = (message: string = "Resource not found") => createCustomError("NotFoundError", message, 404);
export const UnauthorizedError = (message: string = "Unauthorized") => createCustomError("UnauthorizedError", message, 401);
