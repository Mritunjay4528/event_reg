import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

function getSupabaseClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

app.get('/api/health', (req, res) => {
  res.json({ ok: true });
});

app.post('/api/register', async (req, res) => {
  const { name, roll_number, branch, email } = req.body || {};

  if (!name || !roll_number || !branch || !email) {
    return res.status(400).json({ error: 'validation', message: 'All fields are required.' });
  }

  const supabase = getSupabaseClient();
  if (!supabase) {
    return res.status(500).json({
      error: 'server_configuration',
      message: 'Backend is missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env file.',
    });
  }

  const tableName = process.env.SUPABASE_TABLE || 'matlab_event';

  const { error } = await supabase
    .from(tableName)
    .insert([{
      name: String(name).trim(),
      roll_number: String(roll_number).trim(),
      branch: String(branch).trim(),
      email: String(email).trim(),
    }]);

  if (error) {
    if (error.code === '23505') {
      return res.status(409).json({
        error: 'duplicate',
        message: 'You have already registered with this roll number.',
      });
    }
    console.error(error);
    return res.status(500).json({ error: 'server_error', message: error.message });
  }

  return res.status(201).json({ message: 'Registered successfully.' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`E Labs registration backend running on http://localhost:${PORT}`);
});
