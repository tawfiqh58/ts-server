import express, { Request, Response } from 'express';
import User from '../models/user';
import { userJwt } from '../services/use-nonnull';

const router = express.Router();

router.get('/api/users', async (req: Request, res: Response) => {
  try {
    const docs = await User.find({}).exec();
    res.json(docs);
  } catch (err) {
    res.status(500).end();
  }
});

router.post('/api/users', async (req: Request, res: Response) => {
  const { name, email } = req.body as { name: string; email: string };
  const token = userJwt({ name, email })
  
  const _user = new User({ name, email, token });
  const newUser = await _user.save();

  res.json(newUser);
});

export { router as userRouter };
