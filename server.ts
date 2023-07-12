import express from 'express';
import { currentUserRouter } from './routes/current-user';
import dotenv from 'dotenv';
dotenv.config();
import { userJwt } from './routes/use-nonnull';

// process.env.DB_URL = 'Hello, world!';
if (!process.env.DB_URL) {
  throw new Error('DB_URL must be defined');
}

console.log(userJwt);

const app = express();
app.use(express.json());

app.use(currentUserRouter);

app.listen(5000, () => {
  console.log('Listening on port 5000');
});
