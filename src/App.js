import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import LandingPage from './pages/LandingPage/landingPage'
import Appi from './pages/App/app';


function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/app" component={Appi}/>
          </Switch>
        </BrowserRouter>
      </div>

  );
}

export default App;
