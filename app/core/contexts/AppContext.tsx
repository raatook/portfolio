// eslint-disable @typescript-eslint/no-empty-function
"use client";
import * as React from "react";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

export type AppContextType = {
  isSticky: boolean;
  setIsSticky: (isSticky: boolean) => void;
};

export type AppContextProps = {
  children: ReactNode;
};

export const AppContext = createContext<AppContextType | null>(null);

const AppContextProvider: React.FC<AppContextProps> = ({ children }) => {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        isSticky,
        setIsSticky,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => useContext(AppContext) as AppContextType;

export default AppContextProvider;
