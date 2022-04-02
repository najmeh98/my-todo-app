import { Children, ReactNode, useState } from "react";
import { MdDelete, MdOutlineEdit } from "react-icons/md";
import { useTransition, animated } from "react-spring";
import styled from "styled-components";
import { useTheme } from "./Context/ThemeContext";

type Props = {
  // isOpen: boolean;
  // onClose: () => void;
  children: ReactNode;
};

export const Modal = ({ children, title }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  let theme = useTheme();
  const handleMenu = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };
  let transition = useTransition(isOpen, {
    from: { x: 20, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: 20, opacity: 0 },
  });
  return (
    <Style_Menu>
      <div style={{ maxWidth: "100%" }} onClick={handleMenu}>
        {title}
      </div>

      {transition(
        (item, style) =>
          item &&
          isOpen && (
            <Menu
              style={{
                position: "fixed",
                boxShadow: theme.boxShadow,
              }}
            >
              <animated.div
                style={{
                  position: "absolute",
                  backgroundColor: "#fff",
                  padding: "12px",
                }}
              >
                {children}
              </animated.div>
            </Menu>
          )
      )}
    </Style_Menu>
  );
};
const Style_Menu = styled.div`
  width: 100%;
  position: relative;
`;
const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
`;
const Menu = styled.div`
  position: relative;
`;
