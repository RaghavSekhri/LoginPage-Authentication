import React from 'react';
import './App.css';
import RenderLogin from './login/renderlogin';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Home from './homepage/homepage';
import Register from './register/register'

function App() {
  return (
    <div className="hello">
      <Router>
        <Route exact path="/" component={RenderLogin} />
        <Route path="/home" component={Home} />
        <Route exact path="/register" component={Register} />
      </Router>
    </div>
  )
}

export default App;
