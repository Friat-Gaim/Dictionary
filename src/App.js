import React from "react";
import Navbar from "./components/layout/Navbar";
import addword from './components/Dashboard/addword'
import homepage from './components/pages/Home'
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={homepage} />
          <Route path="/addword" component={addword}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
