import { createContext, useContext } from "react";
import { ContextType } from "../types/DataType";

export const DataContext = createContext<ContextType | undefined>(undefined);

export function useDataContext() {
  const productsPrice = useContext(DataContext);

  if (productsPrice === undefined) {
    throw new Error("useInpContext must be used with a inpContext");
  }

  return productsPrice;
}
