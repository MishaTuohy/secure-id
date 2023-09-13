export interface DbClient {
    connect(): Promise<void>;
    query(queryString: string, parameters?: any[]): Promise<any>;
    disconnect(): Promise<void>;
}
