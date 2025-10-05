/* Componente card, recibe un objeto que contiene todas las propiedades */
function Card(props) {
  /* children representa el contenido entre las etiquetas de apertura y cierre del componente */
  const { children } = props;

  /* dentro del div cambio de class -> className, debido al lenguaje jsx 
  */
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
