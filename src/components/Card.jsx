/* Componente card, recibe propiedades(props) */
function Card(props) {
  const { children } = props; //se extrae la propiedad body

  /* dentro del div cambio de class -> className, debido al lenguaje jsx 
     se muestra el contenido de la propiedad body */
  return (
    <div className="card" style={{ width: "350px" }}>
      <div className="card-body">{children}</div>
    </div>
  );
}

export function CardBody(props) {
  const { title, text } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </>
  );
}

export default Card;
