export type JsonPrimitive = number | string | boolean | null;
export type JsonObject = { [key in string]?: JsonValue };
export interface JsonArray extends Array<JsonValue> {}
export type JsonValue = JsonObject | JsonArray | JsonPrimitive;
