import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://apgrvhbdjktanxitcvzg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwZ3J2aGJkamt0YW54aXRjdnpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEyNzk1OTMsImV4cCI6MjAyNjg1NTU5M30.URwj4rnG_pYjmGePcrjRbeFZ5s-rn0CDy994jZUCZLw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
