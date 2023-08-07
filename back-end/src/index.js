import { app } from "./app.js";
import db from './db/setup.js';

const port = process.env.PORT || 3030;

app.listen(port, async () => {
  await db.read();
  console.log(`App listening on port ${port}`);
});
