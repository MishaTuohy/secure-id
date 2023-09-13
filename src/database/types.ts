export interface DbClient {
    connect(): Promise<void>;
    query<TResult = any>(queryString: string, parameters?: any[]): Promise<TResult>;
    command(commandString: string, parameters?: any[]): Promise<void>;
}
