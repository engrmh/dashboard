import { createContext, useContext } from "react";

const HomeCtx = createContext();

export default function HomeCtxProvider({ children }) {
  const value = {};

  return <HomeCtx.Provider value={value}>{children}</HomeCtx.Provider>;
}

export const useHomeCtx = () => {
  const context = useContext(HomeCtx);

  if (!context) {
    throw new Error("context should be use within provider");
  }

  return context;
};
