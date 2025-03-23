import { createContext, ReactNode } from "react";

interface ThemeContextData {
  accessToken: string | null;
}

export const TokenContext = createContext<ThemeContextData>({
  accessToken: null,
});

export const SessionProvider = ({
  children,accessToken
}: {
  children: ReactNode;
  accessToken : string | null
}) => {

  return (
    <TokenContext.Provider value={{ accessToken }}>
      {children}
    </TokenContext.Provider>
  );
};
