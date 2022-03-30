import styled, { css } from "styled-components";
export const desktop = (body: any) => css`
  @media (min-width: 1024px) {
    ${body};
  }
`;
