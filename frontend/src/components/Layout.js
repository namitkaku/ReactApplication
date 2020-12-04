import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router';
import Dashboard from './Dashboard';



const layout = () => {
   return(
    <div className="wrapper">
           <Header/>
           <Sidebar/>
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
         <Route exact path='dashboard' component={Dashboard}></Route>
      </Switch>
           </div>
    </div>
   )
}
export default layout;