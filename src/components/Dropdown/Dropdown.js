import { useState } from 'react';
import './Dropdown.css';

// class DropdownClass extends Component {
//   state = {
//     visible: false,
//   };

//   toggle = () => {
//     this.setState(prevState => ({
//       visible: !prevState.visible,
//     }));
//   };

//   render() {
//     const { visible } = this.state;
//     return (
//       <div className="Dropdown">
//         <button
//           type="button"
//           className="Dropdown__toggle"
//           onClick={this.toggle}
//         >
//           {visible ? 'Скрыть' : 'Показать'}
//         </button>
//         {visible && <div className="Dropdown__menu">Выпадающее меню</div>}
//       </div>
//     );
//   }
// }

const Dropdown = () => {
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

export default Dropdown;
