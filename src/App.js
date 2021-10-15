import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Posts from "./components/pages/Posts";
import Users from "./components/pages/Users";
import Hook from "./components/pages/Hook";

/*const decirSaludo = (params) => {
  alert(`Hola ${params}`);
};
const verInput = (e) => {
  console.log(e.target.value);
};*/

function App() {
  //Funcion de enrutamiento
  const Routing = () => {
    return (
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/hook" component={Hook} />
      </Switch>
    );
  };

  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routing></Routing>
      </Router>
    </>
  );
}

/*
<div className="col">
        <input onChange={verInput}></input>
      </div>
      <div className="row mx-auto w-75">
        <div className="col">
          <button
            onClick={() => decirSaludo("Gabriel")}
            className="btn btn-info"
          >
            Saludar
          </button>
        </div>
      </div>
*/

export default App;
