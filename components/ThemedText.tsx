import { ReactNode } from "react";
import { useTheme } from "./Context/ThemeContext";
import { Theme } from "./types/theme";

export const ThemedText = ({
  children,
  fontSize,
  fontWeight,
  color,
  Style,
  fontFamily,
}: {
  children: ReactNode;
  fontSize?: keyof Theme["fontSize"];
  fontWeight?: keyof Theme["fontWeight"];
  color?: keyof Theme["color"];
  fontFamily?: keyof Theme["fontFamily"];
  Style?: any;
}) => {
  let t = useTheme();
  return (
    <h1
      style={{
        fontSize: t.fontSize[fontSize || "normal"],
        fontWeight: t.fontWeight[fontWeight || "regular"],
        fontFamily: t.fontFamily[fontFamily],
        color: t.color.textcolor,
        margin: "0px",
        lineHeight: "2.25rem",
        display: "block",
        alignItems: "center",
      }}
    >
      {children}
    </h1>
  );
};
