import React, { Component } from 'react'
import Styled from 'styled-components'

const Container = Styled.div<ContainerProps>`
  text-align: center;
  background-color: ${(props) => props.backgroundColor};
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0,0,0,0.2);
  }
`;

const Label = Styled.label`
  color: #FFFFFF;
  font-size: 16px;
`;

interface Props {
  readonly label: string;
  readonly backgroundColor?: string;
  readonly hoverColor?: string;
  readonly onClick?: () => void;
}

interface ContainerProps {
  readonly backgroundColor?: string;
  readonly hoverColor?: string;
}

export class Button extends Component<Props> {
  render() {
    const { label, backgroundColor = '#304FFE', hoverColor = '#1E40FF', onClick, } = this.props

    return (
        <Container backgroundColor={backgroundColor}
                   hoverColor={hoverColor}
                   onClick={onClick}>
          <Label>{label}</Label>
        </Container>
    )
  }
}

// export const Button = ({ label, backgroundColor = '#304FFE', hoverColor = '#1E40FF', onClick }: Props) => {
//   return (
//       <Container
//           backgroundColor={backgroundColor}
//           hoverColor={hoverColor}
//           onClick={onClick}
//       >
//         <Label>{label} </Label>
//       </Container>
//   );
// }