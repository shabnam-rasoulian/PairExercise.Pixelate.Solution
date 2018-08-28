import React, { Component } from 'react';
import store, { addRow, pickColor, colorize } from '../store';
import Table from './Table';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.addRow = this.addRow.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  addRow() {
    store.dispatch(addRow());
    this.setState(store.getState());
  }

  handleColorChange(evt) {
    store.dispatch(pickColor(evt.target.value));
    this.setState(store.getState());
  }

  render() {
    return (
      <div>
        <h1>Pixelate</h1>
        <div>
          <button id="add-row" onClick={this.addRow}>
            Add a row
          </button>
          <select onChange={this.handleColorChange}>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="brown">Brown</option>
          </select>
        </div>
        <Table grid={this.state.grid} />
      </div>
    );
  }
}
