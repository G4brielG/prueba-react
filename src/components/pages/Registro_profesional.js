import React from "react";

const registro_profesional = () => {
  return (
    <div className="form-group">
      <form className="form-control" key="a">
        <div className="form-group">
          <label className="form-control">Apellido y nombre</label>
          <input
            type="text"
            className="form-control"
            placeholder="Apellido y nombre"
          ></input>
        </div>
        <div className="form-group">
          <label className="form-control">DNI</label>
          <input
            type="number"
            className="form-control"
            placeholder="DNI"
          ></input>
        </div>
        <div className="form-group">
          <label className="form-control">Fecha de nacimiento</label>
          <input
            type="text"
            className="form-control"
            placeholder="Fecha de nacimiento"
          ></input>
        </div>
        <div className="form-group">
          <label className="form-control">Sexo</label>
          <select className="form-control">
            <option>- Seleccione -</option>
            <option>Femenino</option>
            <option>Masculino</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-control">Datos de contacto</label>
        </div>
        <div className="form-group">
          <label className="form-control">Fecha de nacimiento</label>
          <input
            type="text"
            className="form-control"
            placeholder="Fecha de nacimiento"
          ></input>
        </div>
        <br></br>
        <div className="form-group">
          <label>Si es profesional:</label>
          <div className="form-group">
            <label className="form-control">
              Ingrese los rubros con los que va a trabajar
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="rubro"
            ></input>
          </div>
          <div className="form-group">
            <label className="form-control">Ingrese sus certificaciones</label>
            <input
              type="text"
              className="form-control"
              placeholder="ingrese su certificación"
            ></input>
            <button className="btn btn-info">+</button>
          </div>
          <div className="form-group">
            <label className="form-control">
              Adjunte las fotos de sus certificados
            </label>
            <input type="file" className="form-control"></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default registro_profesional;
