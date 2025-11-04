import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://udqncqqmxyfluagzmiqo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkcW5jcXFteHlmbHVhZ3ptaXFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyNDgzNTYsImV4cCI6MjA3NzgyNDM1Nn0.NaajXtB4_6FNyRH73_2dBVZSwctxogu4kz6nMYEF5es';

export const supabase = createClient(supabaseUrl, supabaseKey);