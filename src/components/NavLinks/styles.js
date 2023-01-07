import styled, { css } from "styled-components";
export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    /* flex-flow: row wrap; */
    flex-direction: row;
    flex-wrap: wrap;

    @media ${theme.media.lteMedium} {
      /* flex-wrap: column wrap; */
      flex-direction: column;
      flex-wrap: wrap;
      align-content: center;
    }
  `}
`;
