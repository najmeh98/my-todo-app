import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useTheme } from "./Context/ThemeContext";

type Props = {
  value: string;
  onChange: () => void;
  type: string;
  placeholder: string;
};

export const StandardInput = ({
  value,
  onChange,
  type,
  placeholder,
}: Props) => {
  const inputRef = useRef<HTMLElement>(null);
  useEffect(() => {
    // @ts-ignore
    inputRef.current.focus();
  }, []);

  let theme = useTheme();

  return (
    <Input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      ref={inputRef}
      style={{
        background: theme.color.InputBgcolor,
        boxShadow: theme.boxShadow,
        borderTopLeftRadius: theme.borderRadius,
        borderBottomLeftRadius: theme.borderRadius,
        height: theme.height,
        padding: theme.padding,
        // fontFamily: theme.fontFamily.MainFont,
        fontSize: theme.fontSize.regular,
        color: "#fff",
      }}
    />
  );
};
const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
    Helvetica Neue, sans-serif;
  /* height: 40px; */
  color: rgb(10, 60, 73);
  &::placeholder {
    color: rgb(10, 60, 73);
    font-size: 16px;
  }
`;
