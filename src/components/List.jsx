import { useState } from "react";

function List({ data }) {
  const [index, setIndex] = useState(1);
  //capturar el evento de click
  function handleClick(i) {
    setIndex(i);
  }
  /* OJO! para que funcione handleClick, no debe hacerse una llamada directa 'onClick={handleClick(idx)}' 
  porque se ejecuta directamente, en vez de cuando se hace el evento de click. Usamos una funcion anonima para evitar esto.
  */
  return (
    <ul className="list-group">
      {data.map((elemento, idx) => (
        <li
          onClick={() => handleClick(idx)}
          className={`list-group-item ${index == idx ? "active" : ""}`}
          key={elemento}
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default List;
