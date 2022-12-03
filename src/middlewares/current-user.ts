export {};

export interface UserPayload {
  id: string;
  phone: string;
  name: string;
  role: string;
  status: number;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload | null | undefined;
    }
  }
}
