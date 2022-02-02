import React from 'react';
import Styled from 'styled-components';

const InputBox = Styled.input`
  font-size: 16px;
  padding; 10px 10px;
  border-radius: 8px;
  border: 1px solid #BDBDBD;
  outline: none;
`;

interface Props {
  readonly placeholder?: string;
}

export const Input = ({ placeholder }:Props) => {
  return (
    <InputBox placeholder={placeholder}/>
  );
}