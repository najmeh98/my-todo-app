import styled, { css } from "styled-components";
export const desktop = (body: any) => css`
  @media (min-width: 1024px) {
    ${body};
  }
`;

export const Mobile = (body: any) => css`
  @media (max-width: 800px) {
    ${body};
  }
`;

export const tablet = (body: any) => css`
  @media (min-width: 800px) and (max-width: 1024px) {
    ${body};
  }
`;

export const notdesktop = (body: any) => css`
  @media (max-width: 1024px) {
    ${body};
  }
`;
