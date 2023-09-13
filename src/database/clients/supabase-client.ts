import { PostgrestSingleResponse, SupabaseClient, SupabaseClientOptions } from "@supabase/supabase-js";
import { DBResponse, DbClient } from "..";

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
      return {
        error: {
          message: response.error.message,
          code: response.error.code,
          details: response.error.details,
          hint: response.error.hint
        }
      };
    } 
    return { data: response.data };
  }
}
