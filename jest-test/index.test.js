const { sum, person, toggle, range } = require('./index');

describe('test index.js file', () => {
	it('sum(1, 2) = 3', () => {
		expect(sum(1, 2)).toBe(3);
	});
	
	it('person("kim", 15) => ("kim", 15)', () => {
		expect(person('kim', 15)).toEqual({
			name: 'kim',
			age: 15,
		});
	});

	it('toggle(true) will false', () => {
		expect(toggle(true)).toBeFalsy();
	});

	it('toggle(false) will true', () => {
		expect(toggle(false)).toBeTruthy
	});

	it('range(1, 10) toContain(12) will false', () => {
		expect(range(1, 10)).toContain(10);
	});

});
