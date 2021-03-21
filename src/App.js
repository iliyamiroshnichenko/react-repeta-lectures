// import React from "react";
import Logo from "./components/Logo";
import PaintingList from "./components/PaintingList";
import Panel from "./components/Panel";
import paintings from "./paintings.json";

const App = () => {
  return (
    <>
      <Panel title="Новости">
        <p>Hello</p>
      </Panel>
      <Logo text="Главный компонент-контейнер приложения" />
      <PaintingList paintings={paintings} />
    </>
  );
};

export default App;
