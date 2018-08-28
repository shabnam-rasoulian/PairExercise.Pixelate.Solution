import React, { Component } from 'react';
import store, { colorize } from '../store';

export default class TableCell extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleColorize = this.handleColorize.bind(this);
  }

  handleColorize(evt) {
    evt.preventDefault();
    store.dispatch(colorize(this.props.row, this.props.col));
  }

  render() {
    return (
      <td
        className={this.props.color}
        onClick={this.handleColorize}
        onMouseOver={this.handleColorize}
        onMouseDown={this.handleColorize}
      />
    );
  }
}
