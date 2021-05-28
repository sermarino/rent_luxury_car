import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar         from "./components/nav/navbar";
import Header         from "./components/header/header";
import Homepage       from "./components/home/home";
import MostraProdotti from "./components/prodotti/prodotti";
import RichiediInfo   from "./components/info/info";


// function App() {
//   return (
//     <Router>
//       <Header></Header>
//     </Router>
//   );
// }

// dentro <Router> è possibile renderizzare tutti i componenti 
function App(){
  return (
    <Router>
      <Navbar/>
      
      <Route path="/" exact>
        <Homepage/>
      </Route>

      <Route path="/prodotti">
        <MostraProdotti/>
      </Route>

      <Route path="/richiesta_info">
        <RichiediInfo/>
      </Route>
    </Router>
  )
}


export default App;
