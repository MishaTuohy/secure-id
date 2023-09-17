import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { BadRequestError } from "../../utilities/errors";

export function validate(schema: z.ZodSchema<any>) {
    return (req: Request, res: Response, next: NextFunction) => {
        const validationResult = schema.safeParse(req.body);
        if (!validationResult.success) {
            throw BadRequestError('Invalid query parameters');
        } else {
            next();
        }
    };
}
