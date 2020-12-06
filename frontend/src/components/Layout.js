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
                
                </section>
           </div>
    </div>
   )
}
export default layout;