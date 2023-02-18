import styled, { css } from 'styled-components';

export const FormWrapper = styled.div`
  margin-top: 5rem;
  padding: 1.5rem;
  @media (min-width: 1440px) {
    margin: 0;
    flex: 1.5;
    display: grid;
    place-items: center;
  }
`;

export const CardForm = styled.form`
  width: 100%;
  @media (min-width: 1440px) {
    width: 400px;
  }
`;

export const FormInput = styled.input`
  border: 2px solid hsl(270, 3%, 87%);
  border-radius: 5px;
  padding: 0.8rem 1rem;
  width: 100%;
  margin-bottom: 0.1rem;
  margin-top: 0.5rem;
  font-family: inherit;
  outline: none;
  cursor: pointer;

  ::placeholder {
    font-size: 18px;
    font-weight: 500;
    color: hsl(270, 3%, 87%);
  }
  :focus {
    border: 2px solid hsl(278, 94%, 30%);
  }

  ${(props) =>
    props.notValid &&
    css`
      border: 2px solid hsl(0, 100%, 66%);
    `}
`;

export const FormLabel = styled.label`
  display: inline-block;
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  color: hsl(278, 68%, 11%);
  letter-spacing: 1.5px;
  margin-top: 1rem;
`;

export const FlexItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const ConfirmButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;
  height: 55px;
  border-radius: 5px;
  background-color: hsl(278, 68%, 11%);
  color: hsl(0, 0%, 100%);
  text-transform: capitalize;
  font-size: 18px;
  cursor: pointer;
`;
