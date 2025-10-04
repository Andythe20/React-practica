import PropTypes from "prop-types";

function List({ data }) {
  return (
    <ul className="list-group">
      {data.map((elemento) => (
        <li className="list-group-item" key={elemento}>
          {elemento}
        </li>
      ))}
    </ul>
  );
}

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
};

export default List;
