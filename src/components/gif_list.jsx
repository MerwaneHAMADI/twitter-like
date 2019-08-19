import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  renderList = () => {
    return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} updateGifFunction={this.props.updateGifFunction} clickable={true} />);
  };

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}
export default GifList;
