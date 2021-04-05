import { useState } from 'react';
import './ColorPicker.css';

// class ColorPickerClass extends Component {
//   state = {
//     activeOptionIdx: 0,
//   };

//   setActiveIndex = index => {
//     this.setState({ activeOptionIdx: index });
//   };

//   makeOptionClassName = index => {
//     const optionClasses = ['ColorPicker__option'];
//     if (index === this.state.activeOptionIdx) {
//       optionClasses.push('ColorPicker__option--active');
//     }
//     return optionClasses.join(' ');
//   };

//   render() {
//     const { activeOptionIdx } = this.state;
//     const { options } = this.props;
//     const { label } = options[activeOptionIdx];
//     return (
//       <div className="ColorPicker">
//         <h2 className="ColorPicker__title">Color Picker</h2>
//         <p>Выбран цвет: {label}</p>
//         <div>
//           {options.map(({ label, color }, index) => (
//             <button
//               type="button"
//               className={this.makeOptionClassName(index)}
//               key={label}
//               style={{
//                 backgroundColor: color,
//               }}
//               onClick={() => this.setActiveIndex(index)}
//             ></button>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

const ColorPicker = ({ options }) => {
  const [activeOptionIdx, setActiveOptionIdx] = useState(0);

  const makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];
    if (index === activeOptionIdx) {
      optionClasses.push('ColorPicker__option--active');
    }
    return optionClasses.join(' ');
  };
  const { label } = options[activeOptionIdx];
  return (
    <div className="ColorPicker">
      <h2 className="ColorPicker__title">Color Picker</h2>
      <p>Выбран цвет: {label}</p>
      <div>
        {options.map(({ label, color }, index) => (
          <span
            className={makeOptionClassName(index)}
            key={label}
            style={{
              backgroundColor: color,
            }}
            onClick={() => setActiveOptionIdx(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
