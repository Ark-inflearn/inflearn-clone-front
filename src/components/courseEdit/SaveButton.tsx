import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  text-align: center;
`;

const Button = styled.button`
  margin-top: 48px;
  padding: 0.2rem 0.6rem;
  height: 48px;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgb(0 0 0 / 16%);
  border: 1px solid #dbdbdb;
  color: #363636;
  &:hover {
    border-color: #a7a7a7;
  }
`;
type Prop = {
  text: string;
  onClick: () => void;
};
const SaveButton = ({ text, onClick }: Prop) => (
  <ButtonContainer>
    <Button type="button" onClick={onClick}>
      {text}
    </Button>
  </ButtonContainer>
);

export default SaveButton;
