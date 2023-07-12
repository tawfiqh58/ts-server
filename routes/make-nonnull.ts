import jwt from 'jsonwebtoken';

const existingUser = { id: '1', email: 'some@gmail.com' };

export const userJwt = jwt.sign(
  {
    id: existingUser.id,
    email: existingUser.email,
  },
  process.env.JWT_KEY
);
