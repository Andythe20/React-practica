import { useState } from "react";

function List({ data, onSelect }) {
  const [index, setIndex] = useState(1);
  //capturar el evento de click
  function handleClick(i, elemento) {
    setIndex(i);
    onSelect?.(elemento); //operador de encadenamiento opcional.
  }
  /* OJO! para que funcione handleClick, no debe hacerse una llamada directa 'onClick={handleClick(idx)}' 
  porque se ejecuta directamente, en vez de cuando se hace el evento de click. Usamos una funcion anonima para evitar esto.
  */
  return (
    <ul className="list-group">
      {data.map((elemento, idx) => (
        <li
          onClick={() => handleClick(idx, elemento)}
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
