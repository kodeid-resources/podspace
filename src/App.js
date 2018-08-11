import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      podcasts: [
        {
          id: 1,
          thumbnail:
            'https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded_nologo400/405469/405469-1522117397083-c0592d270d967.jpg',
          title: 'Ceritanya Developer Podcast',
        },
        {
          id: 2,
          thumbnail:
            'https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded400/89375/89375-1526983608105-f58a2aadf7bc1.jpg',
          title: 'Developer Muslim',
        },
        {
          id: 3,
          thumbnail:
            'https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded_nologo400/814282/814282-1532652306173-4bb60a18c1dfb.jpg',
          title: 'Data Pods',
        },
      ],
    };
  }

  render() {
    return (
      <div className="wrapper">
        <h1>
PodSpace
        </h1>
        <div className="search-bar">
          <form>
            <input type="text" placeholder="Search for podcast" />
            <button>
Search
            </button>
          </form>
        </div>
        <div className="podcasts">
          {this.state.podcasts.map(podcast => (
            <div key={podcast.id} className="podcast">
              <img alt={podcast.title} src={podcast.thumbnail} />
              <h2>
                {podcast.title}
              </h2>
              <a className="button">
Listen
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
