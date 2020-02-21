import React from "react";
import Navbar from "./components/layout/Navbar";
import Dictionary from './components/layout/newdic'
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import dictionary from "./components/dictionary";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Dictionary}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
