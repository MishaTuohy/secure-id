import rateLimit, { RateLimitRequestHandler } from "express-rate-limit";

export const rateLimiter:RateLimitRequestHandler = rateLimit({
  windowMs: 60 * 60 * 1000, 
  max: 100,
  message: "Too many requests from this IP, please try again later.",
});
