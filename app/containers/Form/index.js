import React from 'react';

import { inject, observer } from "mobx-react";

// @observer(['changeStore'])
@inject('changeStore')
@observer
export default class Form extends React.Component {
  rendered = 0;

  _change = (e) => {
    const value = e.target.value;
    this.props.changeStore.changeInput(value);
  }

  render() {
    this.rendered = this.rendered + 1;
    return (
      <div>
        <input
          type='text'
          value={this.props.changeStore.input}
          onChange={this._change}
        />
        <p>{this.props.changeStore.input}</p>
        <p>rendered: {this.rendered}</p>
      </div>
    )
  }
}
