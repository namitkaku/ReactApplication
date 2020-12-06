import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Demo from './components/Demo';
import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router';
import Dashboard from './components/Dashboard';
import AddCategory from './components/AddCategory';
import ListCategory from './components/ListCategory';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="content-wrapper">
        <section className="content-header">
         
        </section>
        <Switch>
          <Route exact path='/' component={Dashboard}></Route>
          <Route exact path='/add-category' component={AddCategory}></Route>
          <Route exact path='/list-category' component={ListCategory}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
