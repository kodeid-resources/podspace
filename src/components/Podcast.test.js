import React from 'react';
import ReactDOM from 'react-dom';

import Podcast from './Podcast.js';

test('Renders Podcast', () => {
  const container = document.createElement('div');
  ReactDOM.render(
    <Podcast podcast={{ title: 'The Title', thumbnail: 'test.js' }} />,
    container,
  );
  expect(container).toBeDefined();
});

test("renders 'The Title' when podcast object included", () => {
  const container = document.createElement('div');
  ReactDOM.render(
    <Podcast podcast={{ title: 'The Title', thumbnail: 'test.js' }} />,
    container,
  );
  expect(container.textContent).toMatch('The Title');
});
