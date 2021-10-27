import React from "react";
import { useEffect, useState } from "react";

const Posts = () => {
  const [state, setState] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/todos/");
      const res = await data.json();
      setData(res);
    } catch (error) {
      console.log("Hubo un error en la petición. " + error);
    }
  };

  useEffect(() => {
    console.log("cambió el estado, activamos el useEffect");
    fetchData();
  }, [state]);
  return (
    <>
      {data.map((e, i) => {
        return <p key={i}>{e.title}</p>;
      })}
      <button onClick={() => setState(!state)} className="btn-info">
        cambiar
      </button>
    </>
  );
};

export default Posts;
