import { Component, useState } from 'react';
import Controls from './Controls';
import './Counter.css';

class CounterClass extends Component {
  static defaultProps = {
    initialvalue: 5,
  };

  state = {
    value: this.props.initialvalue,
  };

  handleIncrement = () => {
    this.setState(prState => ({
      value: prState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prState => ({
      value: prState.value - 1,
    }));
  };

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

const CounterFunc = ({ initialvalue }) => {
  const [value, setValue] = useState(initialvalue);
  const handleIncrement = () => setValue(value + 1);
  const handleDecrement = () => setValue(value - 1);
  return (
    <div className="Counter">
      <span className="Counter__value">{value}</span>
      <Controls onIncrement={handleIncrement} onDecrement={handleDecrement} />
    </div>
  );
};

export { CounterClass, CounterFunc };
