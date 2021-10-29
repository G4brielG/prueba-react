import React from "react";
import { useEffect, useState } from "react";

const Posts = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://equipo-server.herokuapp.com/estudiante/"
      );
      const res = await data.json();
      handleRenderData(res);
    } catch (error) {
      console.log("Hubo un error en la petición. " + error);
    }
  };

  const handleRenderData = (res) => {
    setData(res[0].datos_personales.nombre_apellido);
    res.map((e) => console.log(e));
    // <p key={i}>{e.datos_personales.nombre_apellido}</p>
  };

  useEffect(() => {
    fetchData();
  });
  return (
    <>
      <div>
        <label>Nombre:</label>
        <br></br>
        <input type="text" value={data}></input>
        <br></br>
        <label>correo:</label>
        <br></br>
        <input type="text" value={data}></input>
      </div>
    </>
  );
};

export default Posts;
