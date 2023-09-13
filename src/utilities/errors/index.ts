import { CustomErrorBase } from "./types";

export function createCustomError(name: string, message: string, statusCode: number): CustomErrorBase { return { name, message, statusCode }; }
export const NotFoundError = (message: string = "Resource not found") => createCustomError("NotFoundError", message, 404);
export const UnauthorizedError = (message: string = "Unauthorized") => createCustomError("UnauthorizedError", message, 401);
export const BadRequestError = (message: string = "Bad Request") => createCustomError("BadRequestError", message, 400);
export const ForbiddenError = (message: string = "Forbidden") => createCustomError("ForbiddenError", message, 403);
export const ConflictError = (message: string = "Conflict") => createCustomError("ConflictError", message, 409);
export const InternalServerError = (message: string = "Internal Server Error") => createCustomError("InternalServerError", message, 500);
export const ProjectPausedError = (message: string = "Project Paused Error") => createCustomError("ProjectPausedError", message, 540);
export const ProjectGatewayTimeoutError = (message: string = "Project Gateway Timeout Error") => createCustomError("ProjectGatewayTimeoutError", message, 544);
