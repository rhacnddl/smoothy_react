import React from 'react'
import { render, screen, fireEvent} from '@testing-library/react'
/* toHaveStyleRule 이라는 Matcher를 제공함으로써 styled-components 를 좀 더 자세히 테스트 O */
import 'jest-styled-components'

import { Input } from "Components";

describe('<Input />', () => {

  it('renders component correctly', function () {
    const value = 'default value'
    const { container } = render(<Input value={value}/>)
    const input = screen.getByDisplayValue(value)

    expect(input).toBeInTheDocument()

    expect(container).toMatchSnapshot
  });

  it('renders placeholder correctly', () => {
    const value = 'default value'
    render(<Input placeholder={value}/>)

    const input = screen.getByPlaceholderText(value)
    expect(input).toBeInTheDocument()
  })

  it('changes the data', () => {
    const value = 'default value'
    const inputValue = 'study react'
    render(<Input placeholder={value}/>)

    const input = screen.getByPlaceholderText(value) as HTMLInputElement

    fireEvent.change(input, {
      target: {
        value: inputValue
      }
    })

    expect(input.value).toBe(inputValue)
  })
})
