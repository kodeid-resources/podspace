import React from "react";

class NewPodcast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      thumbnail: ""
    };
  }
  handleTitleChange = ({ target: { value } }) => {
    this.setState({
      title: value
    });
  };
  handleThumbnailChange = ({ target: { value } }) => {
    this.setState({
      thumbnail: value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const newPodcast = {
      id: this.state.title.charCodeAt(0),
      title: this.state.title,
      thumbnail: this.state.thumbnail
    };
    this.setState({
      title: "",
      thumbnail: ""
    });
    this.props.handleNewPodcast(newPodcast);
  };

  render() {
    const { visible } = this.props;
    return (
      <div
        className="box new-podcast"
        style={visible === true ? { display: "block" } : { display: "none" }}
      >
        <h3> New Podcast </h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Title of the podcast"
            onChange={this.handleTitleChange}
            value={this.state.title}
          />
          <input
            type="text"
            placeholder="Thumbnail for image"
            onChange={this.handleThumbnailChange}
            value={this.state.thumbnail}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default NewPodcast;
