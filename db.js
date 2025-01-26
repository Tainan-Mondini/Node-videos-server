import { neon } from '@neondatabase/serverless';  // Importe o módulo neon corretamente
import dotenv from 'dotenv';

dotenv.config();

export const sql = neon(process.env.DATABASE_URL);
