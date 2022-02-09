import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
/* toHaveStyleRule 이라는 Matcher를 제공함으로써 styled-components 를 좀 더 자세히 테스트 O */
import 'jest-styled-components'

import { Button } from "Components";

describe('<Button />', () => {

  it('renders component correctly', () => {
    const { container } = render(<Button label="Button Test" />)
    const label = screen.getByText('Button Test')

    expect(label).toBeInTheDocument()

    const parent = label.parentElement

    expect(parent).toHaveStyleRule('background-color', '#304FFE');
    expect(parent).toHaveStyleRule('background-color', '#1E40FF', {modifier: ':hover'})
    expect(container).toMatchSnapshot()
  })

  it('changes backgroundColor and hoverColor Props', () => {

    const bgColor = '#FF1744'
    const hoverColor = '#F01440'

    render(<Button label={"Button Test"} backgroundColor={bgColor} hoverColor={hoverColor} />)

    const parent = screen.getByText('Button Test').parentElement

    expect(parent).toHaveStyleRule('background-color', bgColor)
    expect(parent).toHaveStyleRule('background-color', hoverColor, {modifier: ':hover',})
  })

  it('clicks the Button', () => {
    const handleClick = jest.fn();

    render(<Button label={'Button Test'} onClick={handleClick} />)

    const label = screen.getByText('Button Test')

    //Before Click
    expect(handleClick).toHaveBeenCalledTimes(0)

    fireEvent.click(label)

    //After Click
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
