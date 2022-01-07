import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 15px;
  & form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    justify-content: center;
    width: 50%;
    padding: 15px;
    border: 1px solid black;
    border-radius: 10px;
    & input {
      width: 100%;
      padding: 6px;
      border: 0;
      border-bottom: 1px solid aqua;
      border-radius: 10px;
    }
    & input:focus {
      border: 0;
      outline: 1px solid aqua;
    }
  }
`;
