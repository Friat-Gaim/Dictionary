import React from "react";
import Navbar from "./components/layout/Navbar";
import addword from './components/Dashboard/addword'
import AboutUs from './components/pages/AboutUs'
import listWords from './components/pages/listWords'
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={listWords} />
          <Route exact path="/AboutUs" component={AboutUs} />
          <Route path="/addword" component={addword}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
