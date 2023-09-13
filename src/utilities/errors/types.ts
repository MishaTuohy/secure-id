export interface CustomErrorBase {
    message: string;
    statusCode: number;
    name: string;
    isOperational?: boolean;
}
