import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  height: 52px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  border: none;
  font-size: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  font-weight: bold;
  color: #fff;
  border-radius: 4px;
  transition: background-color 0.2s ease-in;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    // quando o botão estiver desabilitado vai prevalecer a estilização do disabled
    background-color: #ccc !important;
    cursor: default !important;
  }

  ${({ danger, theme }) => danger && css`
    background-color: ${theme.colors.danger.main};

    &:hover {
      background-color: ${theme.colors.danger.light};
    }

    &:active {
      background-color: ${theme.colors.danger.dark};
    }
  `}
`;
