import { user } from '@prisma/client';

declare module 'express-serve-static-core' {
  interface Request {
    user: Omit<user, 'hashedPassword'>;
  }
}
