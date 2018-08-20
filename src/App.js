import React, { Component } from "react";
import axios from "axios";
import { css } from "emotion";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Podcast from "./components/Podcast.js";
import AddButton from "./components/AddButton.js";
import NewPodcast from "./components/NewPodcast.js";

import styles from "./styles.js";

const isSearched = searchTerm => ({ title }) =>
  title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      ui: {
        formVisibility: false
      },
      podcasts: []
    };
  }
  getData = async () => {
    const res = await axios.get(
      "https://podspace-server-aeffazgssu.now.sh/podcasts"
    );
    this.setState({
      podcasts: res.data
    });
  };
  componentDidMount() {
    this.getData();
  }
  componentDidCatch() {
    console.error("Error nih!");
  }

  handleSearchButton() {
    console.log("Searching...");
  }

  handleSearchInput = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };
  showForm = () => {
    this.setState({
      ui: {
        formVisibility: !this.state.ui.formVisibility
      }
    });
  };
  handleNewPodcast = async newPodcast => {
    try {
      await axios.post(
        "https://podspace-server-aeffazgssu.now.sh/podcasts",
        newPodcast
      );
      this.setState({
        podcasts: [...this.state.podcasts, newPodcast],
        ui: { formVisibility: false }
      });
      this.getData();
    } catch (error) {
      console.error(`Something wrong with POSTing to the API: ${error}`);
    }
  };

  render() {
    const stylingH1 = css({
      fontSize: "3em",
      color: "#0c9"
    });
    return (
      <div className={styles.wrapper}>
        <h1 className={stylingH1}>
          <span role="img" aria-label="emoji">
            🚀{" "}
          </span>
          PodSpace
        </h1>
        <div className={styles.box}>
          <BrowserRouter>
            <div>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/subscribe">Subscribe</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
              <Route path="/about" component={() => <h2>About</h2>} />
            </div>
          </BrowserRouter>
        </div>
        <div className={styles.box}>
          <form className={styles.form}>
            <input
              className={styles.input}
              type="text"
              placeholder="Search for podcast"
              onChange={this.handleSearchInput}
            />
            <button
              className={styles.searchButton}
              onClick={this.handleSearchButton}
              type="button"
            >
              Search
            </button>
          </form>
        </div>
        <NewPodcast
          handleNewPodcast={this.handleNewPodcast}
          visible={this.state.ui.formVisibility}
        />
        <div className={styles.podcasts}>
          {this.state.podcasts
            .filter(isSearched(this.state.searchTerm))
            .map(podcast => (
              <Podcast key={podcast.id} podcast={podcast} />
            ))}
        </div>
        <AddButton
          formVisibility={this.state.ui.formVisibility}
          showForm={this.showForm}
        />
      </div>
    );
  }
}

export default App;
