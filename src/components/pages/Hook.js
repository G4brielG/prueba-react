import { useState } from "react";

const Hook = () => {
  const [mensaje, setMensaje] = useState(false);
  const cambiarEstado = (val) => setMensaje(val);

  //settea la variable, la funcion y el estado por defecto
  const [count, setCount] = useState(0);

  const sumar = () => {
    setCount(count + 1);
  };

  const restar = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div className="App">
        {mensaje ? <p>ACTIVADO UWU</p> : <p>DESACTIVADO OWO</p>}
        <button onClick={() => cambiarEstado(!mensaje)}>
          ACTIVAR/DESACTIVAR
        </button>
      </div>
      <br></br>
      <div>
        <button onClick={sumar} className="btn btn-primary">
          SUMAR
        </button>
        <br></br>
        <input value={count}></input>
        <br></br>
        <button onClick={restar} className="btn btn-primary">
          RESTAR
        </button>
      </div>
    </>
  );
};

export default Hook;
