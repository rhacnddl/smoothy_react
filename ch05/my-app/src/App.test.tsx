import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
	it('renders component correctly', () => {
		const { container } = render(<App />);

		const linkElement = screen.getByText(/learn react/i);

		expect(linkElement).toBeInTheDocument();

		expect(container.getElementsByClassName('App-logo')).toHaveLength(1);

		expect(container.getElementsByClassName('App-logo')[0]).toHaveAttribute('src', 'logo.svg');

		expect(container.querySelectorAll('p')).toHaveLength(1);

		expect(container.querySelectorAll('p')[0]).toHaveTextContent('Edit src/App.js and save to reload.');

		expect(container).toMatchSnapshot();
	});
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
