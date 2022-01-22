import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
	it('renders component correctly', () => {
		const { container } = render(<App />);

		const linkElement = screen.getByText(/learn react/i);

		const appLogo = screen.getByAltText('logo');

		expect(appLogo).toBeInTheDocument();

		expect(appLogo).toHaveAttribute('src', 'logo.svg');

		expect(container.querySelectorAll('p')).toHaveLength(1);

		expect(container.querySelectorAll('p')[0]).toHaveTextContent('Edit src/App.tsx and save to reload.');

		expect(container).toMatchSnapshot();
	});
});
