import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vxadnavufbjufaycjbuq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4YWRuYXZ1ZmJqdWZheWNqYnVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgzMzQyOTgsImV4cCI6MjAxMzkxMDI5OH0.vj2NblCS3tB5-oA1W142AJIEpBqUUHyDT69ZslUaZgM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
