export interface IProfileContext {
  id: string;
  fullName: string;
  username: string;
  email: string;
  mobile: string;
}

export interface IAuthContext {
  onLogout?: () => void;
  profile?: IProfileContext;
  isAuthenticated?: () => boolean;
}
