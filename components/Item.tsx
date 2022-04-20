import { useSelect } from "downshift";
import styled, { css } from "styled-components";
import { Mobile, notdesktop } from "../utils/media";
import { ThemeContext, useTheme } from "./Context/ThemeContext";
import { ArrowDown } from "./home/icons/icons";
type itemsType = {
  label: string;
  value: string;
};
// const items: itemsType[] = [
//   { label: "All", value: "All" },
//   { label: "Completed", value: "Completed" },
//   { label: "Uncompleted", value: "Uncompleted" },
// ];

const items: string[] = ["All", "Completed", "Uncompleted"];
type filterItem = {
  filterHandler: (selectedItem: any) => void;
  setSelectedItem: (selectedItem: itemsType) => void;
  selectedItem: itemsType | undefined;
};

export const Item = ({
  selectedItem,
  filterHandler,
  setSelectedItem,
}: filterItem) => {
  const {
    isOpen,
    // selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({ items });

  const theme = useTheme();
  let menuStyles = {
    borderWidth: 1,
    width: "100%",
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
    cursor: "pointer",
  };
  return (
    <Wrapper>
      {/* <label {...getLabelProps()}>Choose an element:</label> */}
      <Selectd style={{ width: "100%" }}>
        <div style={menuStyles} {...getToggleButtonProps({})}>
          {selectedItem || "Elements"}
          <ArrowDown />
        </div>
        <ul
          {...getMenuProps()}
          style={{
            borderRadius: theme.borderRadius,
            backgroundColor: theme.color.InputBgcolor,
            cursor: "pointer",
          }}
        >
          {isOpen &&
            items.map((item, index) => (
              <List
                style={
                  highlightedIndex === index
                    ? { backgroundColor: "#bde4ff" }
                    : {}
                }
                key={`${item}${index}`}
                {...getItemProps({ item, index })}
                onClick={() => filterHandler(item)}
              >
                {item}
              </List>
            ))}
        </ul>
      </Selectd>
    </Wrapper>
  );
};
const List = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  position: relative;
  align-items: flex-end;
  /* height: 100%; */
  /* justify-content: space-between; */
  /* ${notdesktop(css`
    max-width: 400px;
    width: 100%;
  `)} */

  ${Mobile(css`
    margin-bottom: 50px;
    width: 100%;
  `)}
`;

const Selectd = styled.div`
  /* width: 300px; */
  position: absolute;
  z-index: 1;
  ul {
    list-style: none;
    padding: 0px;
  }
  li {
    color: #fff;
  }
`;
