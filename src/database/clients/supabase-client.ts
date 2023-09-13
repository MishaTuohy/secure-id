import { PostgrestSingleResponse, SupabaseClient, SupabaseClientOptions } from "@supabase/supabase-js";
import { DBResponse, DbClient } from "..";
import { UnauthorizedError, NotFoundError, createCustomError, InternalServerError, ProjectPausedError, ProjectGatewayTimeoutError } from "../../utilities/errors";

export class SupabaseDbClient implements DbClient {
  private client: SupabaseClient;

  constructor(supabaseUrl: string, supabaseKey: string, options?: SupabaseClientOptions<any>) {
    this.client = new SupabaseClient(supabaseUrl, supabaseKey, options);
  }

  async command<T>(commandString: string, parameters?: any[]): Promise<DBResponse<T>> {
    const response = await this.client.rpc(commandString, parameters);
    return this.transformResponse<T>(response);
  }

  async query<T>(queryString: string, parameters?: any[]): Promise<DBResponse<T>> {
    const response = await this.client.rpc(queryString, parameters);
    return this.transformResponse<T>(response);
  }

  private transformResponse<T>(response: PostgrestSingleResponse<T>): DBResponse<T> {
    if (response.error) {
      switch (response.error.code) {
        case '404': 
          throw NotFoundError(response.error.message);
        case '401': 
          throw UnauthorizedError(response.error.message);
        case '540':
          throw ProjectPausedError(response.error.message);
        case '544':
          throw ProjectGatewayTimeoutError(response.error.message);
        default: 
          throw InternalServerError(response.error.message);
      }
    }
    return { data: response.data };
  }
}
