import { useSelect } from "downshift";
import React from "react";
import styled, { css } from "styled-components";
import { Mobile, tablet } from "../utils/media";
import { useTheme } from "./Context/ThemeContext";
import { ArrowDown } from "./home/icons/icons";
import { Row } from "./shared/Container";
import { useHover } from "./useHover";

type itemsType = {
  id: string;
  value: string;
};
const items: itemsType[] = [
  { id: "All", value: "All" },
  { id: "Completed", value: "Completed" },
  { id: "Uncompleted", value: "Uncompleted" },
];

export default function SideBar() {
  let [hovered, hoverListener] = useHover();

  const statusHandler = (event: { target: { value: any } }): void => {
    console.log(event?.target.value);
  };

  let theme = useTheme();

  let {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
    highlightedIndex,
  } = useSelect({ items });

  return (
    <Wrapper>
      <Select style={{ width: "100%" }}>
        <div
          style={{
            borderWidth: 1,

            height: 34,
            paddingHorizontal: 4,
            padding: theme.padding,
            fontSize: theme.fontSize,
            backgroundColor: theme.color.InputBgcolor,
            // borderWidth: "1px solid",
            borderRadius: theme.borderRadius,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#fff",
          }}
          {...getToggleButtonProps()}
        >
          {(selectedItem && selectedItem) || "All"}
          <ArrowDown />
        </div>

        <ul
          {...getMenuProps()}
          style={{
            borderRadius: theme.borderRadius,
            backgroundColor: theme.color.InputBgcolor,
          }}
        >
          {isOpen &&
            // items &&
            items.map((item, index) => (
              <List
                key={item.id}
                style={
                  highlightedIndex === index
                    ? { backgroundColor: "#bde4ff" }
                    : {}
                }
                {...getItemProps({ item, index })}
              >
                <li>{item.value}</li>
              </List>
            ))}
        </ul>
      </Select>
      <Img src="amico.png" alt="todoImage" />
    </Wrapper>
  );
}

const List = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 100%;
  justify-content: space-between;
  ${Mobile(css`
    /* grid-template-columns: 1fr; */
    /* grid-row-start: 1; */
    width: 100%;
    gap: 0px;
  `)}
`;

const Select = styled.div`
  /* width: 300px; */
  select {
    width: 100%;
    outline: none;
    /* padding: 8px 16px; */
    border: none;
    z-index: 2;
  }
  ul {
    list-style: none;
    padding: 0px;
  }
  li {
    color: #fff;
  }
`;

const Img = styled.img`
  width: 400px;
  height: 400px;
  ${tablet(css`
    width: 330px;
    height: 330px;
  `)}
  ${Mobile(css`
    display: none;
  `)}
`;
