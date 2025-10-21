export interface AuthContextType {
  isAuthenticated: boolean;
  user: string | null;
  login: (userName: string) => void;
  logout: () => void;
}
