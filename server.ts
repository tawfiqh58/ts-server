import express from 'express';
import mongoose from 'mongoose';
import { currentUserRouter } from './routes/current-user';
import { userRouter } from './routes/user';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

app.use(currentUserRouter);
app.use(userRouter);

if (!process.env.DB_URL) {
  throw new Error('DB_URL not defined!');
}

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log('MongoDB connected!');
    app.listen(5000, () => {
      console.log('Listening on port 5000');
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
