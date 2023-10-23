import React from "react";

function PropsDisplayer(props) {
  if (props.signedIn === true) {
    return (
      <div>
        <h2>Olá usuário, seja bem vindo</h2>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Entre ou cadastre-se</h2>
      </div>
    );
  }
}

export default PropsDisplayer;

