import { useState } from "react";
import styles from "./Button.module.css";

console.log(styles);
export function Button({ children, isLoading, onClick }) {
  const className = [
    `btn btn-${isLoading ? "secondary" : "primary"}`,
    styles.button,
  ].join(" ");

  return (
    <button
      type="button"
      onClick={onClick}
      //className={[styles.button, styles.padded].join(" ")}
      className={className}
      disabled={isLoading}
    >
      {!isLoading ? children : "Cargando ..."}
    </button>
  );
}
