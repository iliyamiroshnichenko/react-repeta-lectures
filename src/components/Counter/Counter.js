import { Component, useState } from 'react';
import './Counter.css';

class CounterClass extends Component {
  state = {
    value: 0,
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>
        <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrement}>
            Увеличить на 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Уменьшить на 1
          </button>
        </div>
      </div>
    );
  }
}

const CounterFunc = () => {
  const [value, setValue] = useState(0);
  return (
    <div className="Counter">
      <span className="Counter__value">{value}</span>
      <div className="Counter__controls">
        <button type="button" onClick={() => setValue(value + 1)}>
          Увеличить на 1
        </button>
        <button type="button" onClick={() => setValue(value - 1)}>
          Уменьшить на 1
        </button>
      </div>
    </div>
  );
};

export { CounterClass, CounterFunc };
