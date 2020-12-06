import React from 'react';
import {NavLink} from 'react-router-dom';

const Sidebar = () => {
    return(
        <aside className="main-sidebar">
       <section className="sidebar">
         <div className="user-panel">
           <div className="pull-left image">
             <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
           </div>
           <div className="pull-left info">
             <p>Alexander Pierce</p>
             <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
           </div>
         </div>
         <form action="#" method="get" className="sidebar-form">
           <div className="input-group">
             <input type="text" name="q" className="form-control" placeholder="Search..." />
             <span className="input-group-btn">
               <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i></button>
             </span>
           </div>
         </form>
         <ul className="sidebar-menu">
           <li className="header">MAIN NAVIGATION</li>
           <li className="active treeview">
           <a href="#">
               <i className="fa fa-dashboard"></i> <span>Manage Category</span> <i className="fa fa-angle-left pull-right"></i>
             </a>
             <ul className="treeview-menu">
               <li className="active"><NavLink to='/add-category'>Add Category</NavLink></li>
               <li><NavLink to='/list-category'>List Category</NavLink></li>
             </ul>
           </li>
           
           
           <li className="treeview">
             <a href="#">
               <i className="fa fa-pie-chart"></i>
               <span>Manage Products</span>
               <i className="fa fa-angle-left pull-right"></i>
             </a>
             <ul className="treeview-menu">
               <li><a href="">Add Products</a></li>
               <li><a href="">List Products</a></li>
               
             </ul>
           </li>
           {/* <li className="treeview">
             <a href="#">
               <i className="fa fa-laptop"></i>
               <span>UI Elements</span>
               <i className="fa fa-angle-left pull-right"></i>
             </a>
             <ul className="treeview-menu">
               <li><a href="pages/UI/general.html"><i className="fa fa-circle-o"></i> General</a></li>
               <li><a href="pages/UI/icons.html"><i className="fa fa-circle-o"></i> Icons</a></li>
               <li><a href="pages/UI/buttons.html"><i className="fa fa-circle-o"></i> Buttons</a></li>
               <li><a href="pages/UI/sliders.html"><i className="fa fa-circle-o"></i> Sliders</a></li>
               <li><a href="pages/UI/timeline.html"><i className="fa fa-circle-o"></i> Timeline</a></li>
               <li><a href="pages/UI/modals.html"><i className="fa fa-circle-o"></i> Modals</a></li>
             </ul>
           </li>
           <li className="treeview">
             <a href="#">
               <i className="fa fa-edit"></i> <span>Forms</span>
               <i className="fa fa-angle-left pull-right"></i>
             </a>
             <ul className="treeview-menu">
               <li><a href="pages/forms/general.html"><i className="fa fa-circle-o"></i> General Elements</a></li>
               <li><a href="pages/forms/advanced.html"><i className="fa fa-circle-o"></i> Advanced Elements</a></li>
               <li><a href="pages/forms/editors.html"><i className="fa fa-circle-o"></i> Editors</a></li>
             </ul>
           </li>
           <li className="treeview">
             <a href="#">
               <i className="fa fa-table"></i> <span>Tables</span>
               <i className="fa fa-angle-left pull-right"></i>
             </a>
             <ul className="treeview-menu">
               <li><a href="pages/tables/simple.html"><i className="fa fa-circle-o"></i> Simple tables</a></li>
               <li><a href="pages/tables/data.html"><i className="fa fa-circle-o"></i> Data tables</a></li>
             </ul>
           </li> */}
          
           {/* <li className="treeview">
             <a href="#">
               <i className="fa fa-folder"></i> <span>Examples</span>
               <i className="fa fa-angle-left pull-right"></i>
             </a>
             <ul className="treeview-menu">
               <li><a href="pages/examples/invoice.html"><i className="fa fa-circle-o"></i> Invoice</a></li>
               <li><a href="pages/examples/login.html"><i className="fa fa-circle-o"></i> Login</a></li>
               <li><a href="pages/examples/register.html"><i className="fa fa-circle-o"></i> Register</a></li>
               <li><a href="pages/examples/lockscreen.html"><i className="fa fa-circle-o"></i> Lockscreen</a></li>
               <li><a href="pages/examples/404.html"><i className="fa fa-circle-o"></i> 404 Error</a></li>
               <li><a href="pages/examples/500.html"><i className="fa fa-circle-o"></i> 500 Error</a></li>
               <li><a href="pages/examples/blank.html"><i className="fa fa-circle-o"></i> Blank Page</a></li>
             </ul>
           </li>
           <li className="treeview">
             <a href="#">
               <i className="fa fa-share"></i> <span>Multilevel</span>
               <i className="fa fa-angle-left pull-right"></i>
             </a>
             <ul className="treeview-menu">
               <li><a href="#"><i className="fa fa-circle-o"></i> Level One</a></li>
               <li>
                 <a href="#"><i className="fa fa-circle-o"></i> Level One <i className="fa fa-angle-left pull-right"></i></a>
                 <ul className="treeview-menu">
                   <li><a href="#"><i className="fa fa-circle-o"></i> Level Two</a></li>
                   <li>
                     <a href="#"><i className="fa fa-circle-o"></i> Level Two <i className="fa fa-angle-left pull-right"></i></a>
                     <ul className="treeview-menu">
                       <li><a href="#"><i className="fa fa-circle-o"></i> Level Three</a></li>
                       <li><a href="#"><i className="fa fa-circle-o"></i> Level Three</a></li>
                     </ul>
                   </li>
                 </ul>
               </li>
               <li><a href="#"><i className="fa fa-circle-o"></i> Level One</a></li>
             </ul>
           </li> */}
          
          
         </ul>
       </section>
     </aside>
    )
   
}

export default Sidebar;