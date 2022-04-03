import React from "react";
import styled from "styled-components";
import { useTheme } from "./Context/ThemeContext";
import { Row } from "./shared/Container";
import { useHover } from "./useHover";

type optionsType = {
  label: string;
  value: string;
}[];
const options: optionsType = [
  { label: "All", value: "All" },
  { label: "Completed", value: "Completed" },
  { label: "Uncompleted", value: "Uncompleted" },
];

export default function SideBar() {
  let [hovered, hoverListener] = useHover();

  const statusHandler = (event: { target: { value: any } }): void => {
    console.log(event?.target.value);
  };

  let theme = useTheme();

  return (
    <Wrapper>
      <Select style={{ width: "100%" }}>
        <select
          style={{
            borderRadius: theme.borderRadius,
            height: theme.height,
            backgroundColor: theme.color.InputBgcolor,
            color: theme.color.optionColor,
            padding: theme.padding,
          }}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}{" "}
        </select>
      </Select>
      <img src="Mobilenotelist.svg" alt="todoImage" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 100%;
  justify-content: space-between;
`;

const Select = styled.div`
  width: 300px;
  select {
    width: 100%;
    outline: none;
    padding: 8px 16px;
    border: none;
  }
  option {
    padding: 8px 16px;
  }
`;
