import { createClient } from '@supabase/supabase-js'
// Create a single supabase client for interacting with your database

const ApiSupabse = createClient('https://mtshtbydimipprixspvw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10c2h0YnlkaW1pcHByaXhzcHZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyMzM5NzEsImV4cCI6MjA5MDgwOTk3MX0.UxJHgQ5y6NFNOI0yilc_N6Jcfsd2edoQ9mXa1Hv25Eo')


export default ApiSupabse;