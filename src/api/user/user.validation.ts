import { z } from 'zod';

export const createUserSchema = z.object({
    email: z.string().email(),
    passwordHash: z.string().min(8),
    isActive: z.boolean().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional()
});

export const updateUserSchema = z.object({
    email: z.string().email().optional(),
    passwordHash: z.string().min(8).optional(),
    isActive: z.boolean().optional(),
    updatedAt: z.date().optional()
});

export const assignRoleToUserSchema = z.object({
    roles: z.array(z.string())
});
