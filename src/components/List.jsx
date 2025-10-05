
function List({ data }) {
  //capturar el evento de click
  function handleClick(e){
    console.log(e)
  }
  
  return (
    <ul className="list-group">
      {data.map((elemento) => (
        <li onClick={handleClick} className="list-group-item" key={elemento}>
          {elemento}
        </li>
      ))}
    </ul>
  );
}


export default List;
