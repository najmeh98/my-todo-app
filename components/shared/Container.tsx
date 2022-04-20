import styled, { css } from "styled-components";
import { Mobile, notdesktop } from "../../utils/media";

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 600px;
  /* ${notdesktop(css`
    width: 100%;
    max-width: 500px;
  `)} */

  ${Mobile(css`
    width: 100%;
  `)}
`;

export const Column = styled.div`
  width: 100%;
`;
