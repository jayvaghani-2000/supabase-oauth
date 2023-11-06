import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://lqypdlbmmbpushhtouea.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxeXBkbGJtbWJwdXNoaHRvdWVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNTkxMTYsImV4cCI6MjAxNDgzNTExNn0.fsi8s5qq8dOboEYf2yqsJlZJkEBIncR9Yv_4XAsTn48"
);
