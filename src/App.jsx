import Button from "./components/Button";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  // codigo jsx, parecido a html con un par de excepciones
  // despues se transforma -> React.createElement
  const list = new Array("Tanjiro", "Goku", "Eren");
  const handleSelect = (elemento) => {
    console.log("Elemento seleccionado:", elemento);
  };
  const handleSelect2 = (elemento) => {
    console.log("Imprimiendo:", elemento);
  };

  return (
    <>
      <Card>
        <CardBody title="Hola mundo" text="Este es el texto" />
        <List data={list} onSelect={handleSelect} />
        <List data={list} onSelect={handleSelect2} />
      </Card>
      <Button text="Click me" />
    </>
  );
}

export default App;
