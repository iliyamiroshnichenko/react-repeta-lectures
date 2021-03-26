// import PaintingList from './components/PaintingList/PaintingList';
// import Panel from './components/Panel/Panel';
// import ColorPicker from './components/ColorPicker/ColorPicker';
// import Notification from './components/Notification/Notification';
// import Layout from './components/Layout/Layout';
import { CounterClass, CounterFunc } from './components/Counter/Counter';
// import paintings from './paintings.json';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

const App = () => {
  return (
    <>
      <h1>Состояние компонента</h1>
      <CounterClass />
      <CounterFunc />
    </>
  );
};

export default App;
