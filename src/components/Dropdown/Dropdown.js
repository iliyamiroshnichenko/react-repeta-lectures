import { Component, useState } from 'react';
import './Dropdown.css';

class DropdownClass extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <div className="Dropdown">
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.toggle}
        >
          {this.state.visible ? 'Скрыть' : 'Показать'}
        </button>
        {this.state.visible && (
          <div className="Dropdown__menu">Выпадающее меню</div>
        )}
      </div>
    );
  }
}

const DropdownFunc = () => {
  const [visible, setVisible] = useState(false);
  const toggle = () => setVisible(!visible);
  return (
    <div className="Dropdown">
      <button type="button" className="Dropdown__toggle" onClick={toggle}>
        {visible ? 'Скрыть' : 'Показать'}
      </button>
      {visible && <div className="Dropdown__menu">Выпадающее меню</div>}
    </div>
  );
};

export { DropdownClass, DropdownFunc };
