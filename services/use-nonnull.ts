import jwt from 'jsonwebtoken';

export const userJwt = (user: { name: string; email: string }) => {
  return jwt.sign(user, process.env.JWT_KEY!); // ! non-nullable operator
};
