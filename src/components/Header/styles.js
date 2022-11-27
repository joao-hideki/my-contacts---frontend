import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: 74px auto 0;

  div {
    margin-top: 48px;
    width: 100%;

    input {
      width: 100%;
      border-radius: 25px;
      background-color: white;
      border: none;
      height: 50px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
      outline: none;
      padding: 0 16px;

      &::placeholder {
        color: #bcbcbc;
      }
    }
  }
`;
