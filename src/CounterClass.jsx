import React from "react";

export default class CounterClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      date: new Date().toDateString(),
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: Math.max(this.state.count - 1, 0) });
  };

  render() {
    return (
      <>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>Add + </button>
        <button onClick={this.decrement}>Subtract - </button>
      </>
    );
  }
}
