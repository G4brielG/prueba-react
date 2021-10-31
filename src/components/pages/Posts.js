import React from "react";
import { useEffect, useState } from "react";

const Posts = () => {
  const [datos, setDatos] = useState([]);

  const obtenerDatos = async () => {
    try {
      const data = await fetch(
        "https://equipo-server.herokuapp.com/estudiante/"
      );
      const res = await data.json();
      setDatos(res)
    } catch (error) {
      console.log("Hubo un error en la petición. " + error);
    }
  };

  useEffect(() => {
    obtenerDatos();
  }, []);
  return (
    <>
        {
          datos.map(item => (
            <div key={item._id}>
              <label>---Datos Personales---</label>
              <br></br>
              <label>{item._id}</label>
              <br></br>
              <label>Nombre</label>
              <br></br>
              <input type="text" key={item.datos_personales.nombre_apellido} defaultValue={item.datos_personales.nombre_apellido}></input>
              <br></br>
              <label>edad</label>
              <br></br>
              <input type="number"  key={item.datos_personales.edad} defaultValue={item.datos_personales.edad}></input>
              <br></br>
              <label>DNI</label>
              <br></br>
              <input type="number"  key={item.datos_personales.dni} defaultValue={item.datos_personales.dni}></input>
              <br></br>
              <label>correo</label>
              <br></br>
              <input type="text"  key={item.datos_personales.correo} defaultValue={item.datos_personales.correo}></input>
              <br></br>
              <label>nombre de usuario</label>
              <br></br>
              <input type="text"  key={item.userId.nombre_usuario} defaultValue={item.userId.nombre_usuario}></input>
              <br></br>
            </div>
          ))
        }
    </>
  );
};

export default Posts;
