import { useState } from "react";

function Button({ text, onClick }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    onClick?.onClick();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`btn ${!isLoading ? `btn-primary` : "btn-secondary disabled"}`}
      disabled={isLoading}
    >
      {!isLoading ? text : "Cargando ..."}
    </button>
  );
}

export default Button;
