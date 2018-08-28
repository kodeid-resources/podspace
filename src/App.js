import React, { Component } from 'react';
import axios from 'axios';

import Podcast from './components/Podcast.js';
import AddButton from './components/AddButton.js';
import NewPodcast from './components/NewPodcast.js';
import Header from './components/Header.js';
import Menu from './components/Menu.js';
import SearchBox from './components/SearchBox.js';

import styles from './styles.js';

const isSearched = searchTerm => ({ title }) => title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      ui: {
        formVisibility: false,
      },
      podcasts: [],
    };
  }

  getData = async () => {
    const res = await axios.get(
      'https://podspace-server-aeffazgssu.now.sh/podcasts',
    );
    this.setState({
      podcasts: res.data,
    });
  };

  componentDidMount() {
    this.getData();
  }

  componentDidCatch() {
    console.error('Error nih!');
  }

  handleSearchButton() {
    console.log('Searching...');
  }

  handleSearchInput = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  showForm = () => {
    this.setState({
      ui: {
        formVisibility: !this.state.ui.formVisibility,
      },
    });
  };

  handleNewPodcast = async (newPodcast) => {
    try {
      await axios.post(
        'https://podspace-server-aeffazgssu.now.sh/podcasts',
        newPodcast,
      );
      this.setState({
        podcasts: [...this.state.podcasts, newPodcast],
        ui: { formVisibility: false },
      });
      this.getData();
    } catch (error) {
      console.error(`Something wrong with POSTing to the API: ${error}`);
    }
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <Header />
        <Menu />
        <SearchBox />
        <NewPodcast
          handleNewPodcast={this.handleNewPodcast}
          visible={this.state.ui.formVisibility}
        />
        <div className={styles.podcasts}>
          {this.state.podcasts.length > 0 ? (
            this.state.podcasts
              .filter(isSearched(this.state.searchTerm))
              .map(podcast => <Podcast key={podcast.id} podcast={podcast} />)
          ) : (
            <div className={styles.box}>
              <h3>
                <span role="img" aria-label="emoji">
                  🚶‍♂️🚶‍♂️🚶‍♂️
                  {' '}
                </span>
                Loading...
              </h3>
            </div>
          )}
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
