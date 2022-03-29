import React, { useContext } from "react";
import { darkTheme } from "../../utils/theme";
import { Theme } from "../types/theme";

type ContextType = Theme;

const initialValue: ContextType = darkTheme;
export const ThemeContext = React.createContext<ContextType>(initialValue);

export const useTheme = () => {
  return useContext(ThemeContext);
};
