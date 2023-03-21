export {};

export interface UserPayload {
  id: string;
  phone: string;
  name: string;
  role: string;
  status: number;
}
export interface AgencyPayload extends UserPayload {
  rank?: number;
  isTransportation?: boolean;
  isDriver?: boolean;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload | null | undefined;
      currentAgency?: AgencyPayload | null | undefined;
    }
  }
}
