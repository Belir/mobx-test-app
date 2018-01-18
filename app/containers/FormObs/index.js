import React from 'react';
import { observer } from "mobx-react";
import { observable } from "mobx";

@observer
export default class FormObs extends React.Component {
  @observable input = "";
  rendered = 0;

  _change = (e) => {
    this.input = e.target.value;
  }

  render() {
    this.rendered = this.rendered + 1;
    return (
      <div>
        <input
          type='text'
          value={this.input}
          onChange={this._change}
        />
        <p>{this.input}</p>
        <p>rendered: {this.rendered}</p>
      </div>
    )
  }
}
