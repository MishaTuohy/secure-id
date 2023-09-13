export interface DbClient {
    command(commandString: string, parameters?: any[]): Promise<any>;
    query(queryString: string, parameters?: any[]): Promise<any>;
}

export interface DBResponse<T> {
  data?: T;
  error?: {
    message: string;
    code: string;
    details?: string;
    hint?: string;
  };
}
