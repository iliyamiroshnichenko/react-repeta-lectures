import { Component } from 'react';
import './ColorPicker.css';

class ColorPickerClass extends Component {
  state = {
    activeOptionIdx: 0,
  };
  render() {
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <div>
          {this.props.options.map(({ label, color }) => (
            <button
              type="button"
              className="ColorPicker__option"
              key={label}
              style={{
                backgroundColor: color,
              }}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

const ColorPickerFunc = ({ options }) => {
  return (
    <div className="ColorPicker">
      <h2 className="ColorPicker__title">Color Picker</h2>
      <div>
        {options.map(({ label, color }) => (
          <span
            className="ColorPicker__option"
            key={label}
            style={{
              backgroundColor: color,
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export { ColorPickerFunc, ColorPickerClass };
