import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

const __dirname = dirname(fileURLToPath(import.meta.url));
let dbName = 'db.json';
if (process.env.NODE_ENV === 'test') {
  dbName = 'db_test.json';
}
const file =  join(__dirname, dbName);

const adapter = new JSONFile(file);
const defaultData = { users: [], claims: [] };
const db = new Low(adapter, defaultData);

export default db;
