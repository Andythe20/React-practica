function Button(props) {
  const { text } = props;

  return (
    <button type="button" className="btn btn-primary">
      {text}
    </button>
  );
}

export default Button;
