import React from 'react';
import { css } from 'emotion';

const stylingH1 = css({
  fontSize: '3em',
  color: '#0c9',
});

const Header = () => (
  <h1 className={stylingH1}>
    <span role="img" aria-label="emoji">
      🚀
      {' '}
    </span>
    PodSpace
  </h1>
);

export default Header;
