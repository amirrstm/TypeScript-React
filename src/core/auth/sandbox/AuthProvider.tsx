import { Loader } from '@src/shared';
import React, { ReactElement, createContext, useState } from 'react';

import { IAuthContext, IProfileContext } from '../types/Login';

export const AuthContext = createContext<IAuthContext>({});

export default function AuthProvider({ children }: { children: ReactElement }): ReactElement {
  const [isPending, setPending] = useState<boolean>(false);
  const [profile, setProfile] = useState<IProfileContext>();

  const isAuthenticated = (): boolean => {
    return !!localStorage.getItem('token');
  };

  return isPending ? (
    <Loader isFullPage />
  ) : (
    <AuthContext.Provider value={{ isAuthenticated, profile }}>{children}</AuthContext.Provider>
  );
}
