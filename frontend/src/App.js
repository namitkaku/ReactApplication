import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Demo from './components/Demo';
import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Dashboard
                  <small>Control panel</small>
          </h1>
          <ol class="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li className="active">Dashboard</li>
          </ol>
        </section>
        <Switch>
          <Route exact path='/' component={Dashboard}></Route>
          <Route exact path='/demo' component={Demo}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
