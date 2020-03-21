import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import App from './App';

let container;

beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	document.body.removeChild(container);
	container = null;
});


test('checks for FoodCheck Header', () => {
	act(() => {
		ReactDOM.render(<App />, container);
	});

	const h1 = container.querySelector('h1');

	expect(h1.textContent).toBe('FoodCheck Header');
});

test('checks for nav items', () => {
	act(() => {
		ReactDOM.render(<App />, container);
	});

	const nav = container.querySelector('nav');

	expect(nav.textContent).toContain('Home');
	expect(nav.textContent).toContain('Example');
	expect(nav.textContent).not.toContain('This should not be in the nav');
});
