import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux'

//Internal Component import
import Messages from './page/Messages/Messages';
import Login from './page/Login/Login';
import Error from './page/Error/Error';

function App() {
  const { user } = useSelector(state => state.AuthReducer)

  return (
    <BrowserRouter>
      <div className="App">
      <Switch>
        <Route path="/" exact>
          {user?<Messages/> : <Login/>}
        </Route>
        <Route path="/message/:id" exact>
          {user?<Messages/> : <Login/>}
        </Route>
        <Route exact component={Error}/>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
