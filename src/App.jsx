import Button from "./components/Button";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
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

  return (
    <>
      <Card>
        <CardBody title="Hola mundo" text="Este es el texto" />
        {contenido}
      </Card>
      <Button text="Click me" />
    </>
  );
}

export default App;
