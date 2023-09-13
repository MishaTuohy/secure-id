import { createClient } from '@supabase/supabase-js';
import { DbClient } from '..';

export class SupabaseClient implements DbClient {
    private supabase: any;

    constructor(supabaseUrl: string, supabaseKey: string) {
        this.supabase = createClient(supabaseUrl, supabaseKey);
    }

    async connect(): Promise<void> {
        // Since Supabase client initializes a connection upon creation,
        // this can be left empty or you can add any initialization steps if necessary.
    }

    async query(queryString: string, parameters?: any[]): Promise<any> {
        // A simplified query example. Adjust based on your specific needs.
        const { data, error } = await this.supabase.from('your_table_name').select(queryString);
        if (error) throw error;
        return data;
    }

    async disconnect(): Promise<void> {
        // Supabase may not have a direct method to "disconnect" like traditional databases,
        // but you can perform any cleanup or finalization tasks here if needed.
    }
}
