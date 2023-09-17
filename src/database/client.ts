import { 
  PostgrestSingleResponse, 
  SupabaseClient, 
  SupabaseClientOptions, 
  createClient
} from "@supabase/supabase-js";
import { 
  UnauthorizedError, 
  NotFoundError, 
  InternalServerError, 
  ProjectPausedError, 
  ProjectGatewayTimeoutError 
} from "../utilities/errors";
import { DBResponse, Database } from ".";

if (!process.env.SUPABASE_DB_URL || !process.env.SUPABASE_DB_KEY) {
  throw InternalServerError('SUPABASE_DB_URL and SUPABASE_DB_KEY must be provided.');
}

const SUPABASE_DB_URL = process.env.SUPABASE_DB_URL!;
const SUPABASE_DB_KEY = process.env.SUPABASE_DB_KEY!;

export function createSupabaseClient(options?: SupabaseClientOptions<any>) {
  const client = createClient<Database>(SUPABASE_DB_URL, SUPABASE_DB_KEY, options);

  return {
    executeDbCommand: <T>(actionString: string, parameters?: any[]) => dbAction<T>(client, actionString, parameters),
  };
}

async function dbAction<T>(client: SupabaseClient, actionString: string, parameters?: any[]): Promise<DBResponse<T>> {
  const response = await client.rpc(actionString, parameters);
  return transformResponse<T>(response);
}

function transformResponse<T>(response: PostgrestSingleResponse<T>): DBResponse<T> {
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
