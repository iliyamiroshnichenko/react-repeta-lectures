import Logo from "./components/Logo";
import PaintingList from "./components/PaintingList/PaintingList";
import Panel from "./components/Panel/Panel";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import Notification from "./components/Notification/Notification";
import paintings from "./paintings.json";

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

const App = () => {
  return (
    <>
      <ColorPicker options={colorPickerOptions}></ColorPicker>
      <Notification text="Все хорошо" type="success"></Notification>
      <Notification text="Все плохо" type="error"></Notification>
      <Panel title="Новости">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi
          quisquam cupiditate debitis rerum iusto assumenda voluptatem aut eos
          deleniti recusandae omnis quidem voluptate fugiat deserunt ipsam
          veniam a tempora, iure qui numquam minus. Iure numquam eum a natus
          cupiditate facere enim. Quidem sint eveniet officia? Veritatis quasi
          pariatur tempore?
        </p>
      </Panel>
      <Logo text="Главный компонент-контейнер приложения" />
      <PaintingList paintings={paintings} />
    </>
  );
};

export default App;
