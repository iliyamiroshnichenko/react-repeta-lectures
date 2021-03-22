import "./ColorPicker.css";

const ColorPicker = ({ options }) => {
  console.log(options);
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

export default ColorPicker;
