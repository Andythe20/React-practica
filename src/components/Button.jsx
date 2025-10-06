import { useState } from "react";

export function Button({ children, isLoading, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`btn btn-${isLoading ? "secondary" : "primary"}`}
      disabled={isLoading}
    >
      {!isLoading ? children : "Cargando ..."}
    </button>
  );
}
