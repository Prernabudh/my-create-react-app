import React from "react";
import { Link, Route } from "react-router-dom";
import Pizza from "./containers/Pizza";
import Users from "./containers/Users";

const App = () => {
  return (
    <div>
      <div>
        <Link to="/">Users</Link> <Link to="/pizza">Pizza</Link>
      </div>
      <div>
        <Route path="/" exact component={Users}></Route>
        <Route path="/pizza" component={Pizza}></Route>
      </div>
    </div>
  );
};

export default App;
