import PocketBase from 'pocketbase';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eznzbrvwojejubnxlcaq.supabase.co';
const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6bnpicnZ3b2planVibnhsY2FxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE5NTU4MDAsImV4cCI6MjAyNzUzMTgwMH0.EAYuqXU7i_D1HOscFgYve1LtCzzfAyhefppchiRdBuc';

export const pb = new PocketBase('https://play.thinkmay.net');
export const supabase = createClient(supabaseUrl, supabaseKey);