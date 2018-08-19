import React, { Component } from "react";

import Podcast from "./components/Podcast.js";
import AddButton from "./components/AddButton.js";
import "./App.css";

const isSearched = searchTerm => ({ title }) =>
  title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      podcasts: [
        {
          id: 1,
          thumbnail:
            "https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded_nologo400/405469/405469-1522117397083-c0592d270d967.jpg",
          title: "Ceritanya Developer Podcast"
        },
        {
          id: 2,
          thumbnail:
            "https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded400/89375/89375-1526983608105-f58a2aadf7bc1.jpg",
          title: "Developer Muslim"
        },
        {
          id: 3,
          thumbnail:
            "https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded_nologo400/814282/814282-1532652306173-4bb60a18c1dfb.jpg",
          title: "Data Pods"
        }
      ]
    };
  }

  handleSearchButton() {
    console.log("Searching...");
  }

  handleSearchInput = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  render() {
    return (
      <div className="wrapper">
        <h1>PodSpace</h1>
        <div className="search-bar">
          <form>
            <input
              type="text"
              placeholder="Search for podcast"
              onChange={this.handleSearchInput}
            />
            <button onClick={this.handleSearchButton} type="button">
              Search
            </button>
          </form>
        </div>
        <div className="podcasts">
          {this.state.podcasts
            .filter(isSearched(this.state.searchTerm))
            .map(podcast => (
              <Podcast key={podcast.id} podcast={podcast} />
            ))}
        </div>
        <AddButton />
      </div>
    );
  }
}

export default App;
