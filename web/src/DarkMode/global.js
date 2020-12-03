import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  .main {
    background: ${({ theme }) => theme.main};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }`