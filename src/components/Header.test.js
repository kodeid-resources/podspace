import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.js';

test('renders Header', () => {
  const container = document.createElement('div');
  ReactDOM.render(<Header />, container);
  expect(container).toBeDefined();
});

test('render Header with PodSpace text', () => {
  const container = document.createElement('div');
  ReactDOM.render(<Header />, container);
  expect(container.textContent).toEqual('🚀 PodSpace');
});
