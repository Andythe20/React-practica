import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  // codigo jsx, parecido a html con un par de excepciones
  // despues se transforma -> React.createElement
  const list = new Array("Tanjiro", "Goku", "Naruto");

  return (
    <Card>
      <CardBody title="Hola mundo" text="Este es el texto" />
      <List data={list} />
    </Card>
  );
}

export default App;
