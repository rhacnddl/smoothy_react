import React from 'react'
import { render, screen, } from '@testing-library/react'
/* toHaveStyleRule 이라는 Matcher를 제공함으로써 styled-components 를 좀 더 자세히 테스트 O */
import 'jest-styled-components'

import { ToDoItem } from "Components";

describe('<ToDoItem />', () => {
  it('renders component correctly', () => {
    const value = 'default value'
    const { container } = render(<ToDoItem label={value}/>)

    const toDoItem = screen.getByText(value)

    expect(toDoItem).toBeInTheDocument()

    const deleteBtn = screen.getByText('삭제')
    expect(deleteBtn).toBeInTheDocument()
    expect(container).toMatchSnapshot
  })
})
