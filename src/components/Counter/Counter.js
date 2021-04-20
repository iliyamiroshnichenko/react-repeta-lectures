import { connect } from 'react-redux';
import * as actions from '../../redux/counter/counter-actions';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';

// class CounterClass extends Component {
//   static defaultProps = {
//     initialvalue: 5,
//   };

//   state = {
//     value: this.props.initialvalue,
//   };

//   handleIncrement = () => {
//     this.setState(prState => ({
//       value: prState.value + 1,
//     }));
//   };

//   handleDecrement = () => {
//     this.setState(prState => ({
//       value: prState.value - 1,
//     }));
//   };

//   render() {
//     const { value } = this.state;
//     return (
//       <div className="Counter">
//         <Value value={value} />
//         <Controls
//           onIncrement={this.handleIncrement}
//           onDecrement={this.handleDecrement}
//         />
//       </div>
//     );
//   }
// }

const Counter = ({ value, step, onIncrement, onDecrement }) => {
  // const [value, setValue] = useState(initialvalue);
  // const handleIncrement = () => setValue(prState => prState + 1);
  // const handleDecrement = () => setValue(prState => prState - 1);
  return (
    <div className="Counter">
      <Value value={value} />
      <Controls
        step={step}
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  value: state.counter.value,
  step: state.counter.step,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: value => dispatch(actions.increment(value)),
  onDecrement: value => dispatch(actions.decrement(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
