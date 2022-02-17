import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

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
})
