import express from 'express';

// App Instance
const app = express();

// Importing Config Constants
import { PORT } from './config.js';

app.listen(PORT, () =>
  console.log(`Server Listening at http://localhost:${PORT}`)
);
