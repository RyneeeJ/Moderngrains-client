import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bmjdnyxrphvftvkllwwh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtamRueXhycGh2ZnR2a2xsd3doIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUzODM2OTUsImV4cCI6MjA0MDk1OTY5NX0.CFHJAQ0Qnnr2tehkxJrs2jiFsvE61XN8zyLDEEo855Q";
const supabase = createClient(supabaseUrl, supabaseKey);
