import React from 'react';

const NewPodcast = ({ visible }) => (
  <div
    className="box new-podcast"
    style={visible === true ? { display: 'block' } : { display: 'none' }}
  >
    <h3>
      {' '}
New Podcast
      {' '}
    </h3>
    <form>
      <input type="text" placeholder="Title of the podcast" />
      <input type="text" placeholder="Thumbnail for image" />
      <button type="submit">
Save
      </button>
    </form>
  </div>
);

export default NewPodcast;
