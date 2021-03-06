import styled, { css } from "styled-components";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { desktop, noMobile, notdesktop, tablet } from "../utils/media";
import { useTheme } from "./Context/ThemeContext";
import { ThemedText } from "./ThemedText";
import { NodeNextRequest } from "next/dist/server/base-http/node";
export const Header = () => {
  let theme = useTheme();

  console.log(theme);

  return (
    <Head>
      <ThemedText
        Style={{
          margin: "0px",
          // fontSize: "1.875rem",
          lineHeight: "2.25rem",
          fontWeight: "700",
          display: "flex",
        }}
      >
        To do List
      </ThemedText>
      <>
        <Row>
          <LanguageUsed icon={<SiNextdotjs />} name="Next js" />
          <LanguageUsed icon={<SiTypescript />} name="Typescript" />
        </Row>
      </>
    </Head>
  );
};

const LanguageUsed = ({ icon, name }: { name: any; icon: any }) => {
  let theme = useTheme();
  return (
    <Nav
      style={{
        background: theme.color.buttoncolor,
        color: theme.color.textcolor,
        fontFamily: theme.fontFamily.MainFont,
      }}
    >
      {icon}
      <span>{name}</span>
    </Nav>
  );
};

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* height: 80px; */
  /* margin-bottom: 50px; */
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Nav = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  line-height: 24px;
  margin-left: 0.5rem;

  svg {
    ${desktop(css`
      margin-right: 0.5rem;
    `)}
  }
  ${desktop(css`
    width: 13rem;
    span {
      display: block;
    }
  `)}

  ${notdesktop(css`
    span {
      display: none;
    }
  `)}
`;
