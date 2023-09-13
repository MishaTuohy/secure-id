import { JsonObject } from "../../api/types";

export interface ILogger {
  error(message: string, meta?: Error | JsonObject): void;
  warn(message: string, meta?: Error | JsonObject): void;
  info(message: string, meta?: Error | JsonObject): void;
  debug(message: string, meta?: Error | JsonObject): void;
}
