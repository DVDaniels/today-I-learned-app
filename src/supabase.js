import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sjgohdhqcoktgwbkadik.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqZ29oZGhxY29rdGd3YmthZGlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEzMTk4MDcsImV4cCI6MTk4Njg5NTgwN30.oSpbigWBPdXBHe_jLEVt5s_V97e5bfox_aUL7zxyjzE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
