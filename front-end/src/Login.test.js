import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import Login from './Login';

let container;

beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	document.body.removeChild(container);
	container = null;
});


test('checks for notificationText', () => {
	act(() => {
		ReactDOM.render(<Login notificationText="Welcome to FoodCheck! Please login" />, container);
	});

	const NotificationEl = container.querySelector('.Notification');
	expect(NotificationEl.textContent).toBe('Welcome to FoodCheck! Please login');
});

test('checks for NOT notificationText error', () => {
	act(() => {
		ReactDOM.render(<Login notificationText="Welcome to FoodCheck! Please login" />, container);
	});

	const NotificationEl = container.querySelector('.Notification--error');
	expect(NotificationEl).toBe(null)
});

test('checks for notificationText error', () => {
	act(() => {
		ReactDOM.render(<Login notificationText="Welcome to FoodCheck! Please login" error="Invalid credentials" />, container);
	});

	const NotificationEl = container.querySelector('.Notification--error');

	expect(NotificationEl.textContent).toBe('Invalid credentials');
});

test('checks for form labels', () => {
	act(() => {
		ReactDOM.render(<Login notificationText="Welcome to FoodCheck! Please login" />, container);
	});

	const labels = container.querySelectorAll('label');

	expect(labels[0].textContent).toContain('Username');
	expect(labels[1].textContent).toContain('Password');
});

test('checks for form input fields', () => {
	act(() => {
		ReactDOM.render(<Login notificationText="Welcome to FoodCheck! Please login" />, container);
	});

	const inputs = container.querySelectorAll('input');

	expect(inputs[0]['type']).toBe('text');
	expect(inputs[1]['type']).toBe('password');
	expect(inputs[2]['type']).toBe('submit');
});