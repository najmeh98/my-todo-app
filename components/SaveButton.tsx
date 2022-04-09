import styled from "styled-components";
import { useTheme } from "./Context/ThemeContext";

export const SaveButton = () => {
  let theme = useTheme();
  return (
    <Button
      style={{
        background: theme.color.buttoncolor,
        color: theme.color.textcolor,
        borderTopRightRadius: theme.borderRadius,
        borderBottomRightRadius: theme.borderRadius,
      }}
      // onClick={() => setIsOpen(false)}
    >
      Save
    </Button>
  );
};
const Button = styled.button`
  padding: 8px 16px;
  border: none;
  height: 40px;
  cursor: pointer;
`;
