import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { noMobile } from "../utils/media";
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
    <Text
      style={{
        // fontSize: t.fontSize[fontSize || "normal"],
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
    </Text>
  );
};
const Text = styled.h1`
  ${noMobile(css`
    font-size: 24px;
    font-weight: 600;
  `)}
`;
