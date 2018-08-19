import React from 'react';

const Podcast = ({ podcast }) => (
  <div className="podcast">
    <img alt={podcast.title} src={podcast.thumbnail} />
    <h2>
      {podcast.title}
    </h2>
    <a className="button">
Listen
    </a>
  </div>
);

export default Podcast;
