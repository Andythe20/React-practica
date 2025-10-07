import { useState } from "react";
import { Button } from "./components/Button";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(!isLoading);
  };

  const list = [];
  const handleSelect = (elemento) => {
    console.log("Elemento seleccionado:", elemento);
  };

  /*
  //Renderizado condicional
  //contenido: almacenar la logica de qué renderizar
  const contenido = list.length ? (
    <List data={list} onSelect={handleSelect} />
  ) : (
    "Sin elementos para mostrar"
  );
  */

  //ahora quiero que si no hay elementos no quiero renderizar nada.
  const contenido = list.length !== 0 && (
    <List data={list} onSelect={handleSelect} />
  );

  const [data, setData] = useState(["Tanjiro", "Eren", "Goku"]);
  const addMinion = () => {
    setData([...data, "Minion"]);
  };
  const removeMinion = () => {
    setData(data.slice(0, -1));
  };

  return (
    <>
      <Card>
        <Button isLoading={true} onClick={addMinion}>
          Agregar
        </Button>
        <Button isLoading={false} onClick={removeMinion}>
          Eliminar
        </Button>
        <List data={data} />
      </Card>
    </>
  );
}

export default App;
