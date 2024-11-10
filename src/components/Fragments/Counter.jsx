import React from "react";
import { render } from "react-dom";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="flex gap-5">
        <h1 className="text-3xl font-bold items-center">{this.state.count}</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
