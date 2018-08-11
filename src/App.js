import React, { Component } from 'react';
import './App.css';

class App extends Component {
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
          <div className="podcast">
            <img
              alt="wicara"
              src="https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded_episode400/779648/779648-1532835833639-5d40d846bf169.jpg"
            />
            <h2>
Ep 02. Introduction to Programming - Riza Fahmi
            </h2>
            <a className="button">
Listen
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
