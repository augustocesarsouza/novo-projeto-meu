import styled, { css } from "styled-components";
export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;

    @media ${theme.media.lteMedium} {
      flex-wrap: column wrap;
      align-content: center;
    }
  `}
`;
