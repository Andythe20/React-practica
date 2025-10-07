import { useState } from "react";
import styles from "./Button.module.css";
import styled from "styled-components";

const Btn = styled.button`
  background-color: ${(props) => (props.isLoading ? "gray" : "red")};
  padding: 25px 30px;
`;

export function Button({ children, isLoading, onClick }) {
  const className = [
    `btn btn-${isLoading ? "secondary" : "primary"}`,
    styles.button,
  ].join(" ");

  return (
    <Btn
      type="button"
      onClick={onClick}
      //className={[styles.button, styles.padded].join(" ")}
      disabled={isLoading}
      isLoading={isLoading}
    >
      {!isLoading ? children : "Cargando ..."}
    </Btn>
  );
}
