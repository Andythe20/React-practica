function Titulo() {
  // codigo jsx, parecido a html con un par de excepciones
  // despues se transforma -> React.createElement

  const nombre = "pepe";
  if (nombre) {
    return <h1>Hola {nombre}</h1>;
  }
  return <h1>Hola Mundo!</h1>;
}

export default Titulo;
