import React from "react";
import Logo from "./components/Logo";
import PaintingList from "./components/PaintingList";
import paintings from "./paintings.json";

const App = () => {
  return (
    <>
      <Logo text="Главный компонент-контейнер приложения" />
      <PaintingList paintings={paintings} />
    </>
  );
};

export default App;
