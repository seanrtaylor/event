import React from 'react';

export default class NavigationMenu extends React.Component {
  render() {
    let style = { display: "block" };
    return (
      <aside className="main-sidebar">
          {/* sidebar: style can be found in sidebar.less */}
          <section className="sidebar" >
              {/* Sidebar user panel */}
              <div className="user-panel">
                  <div className="pull-left image">
                      <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                  </div>
                  <div className="pull-left info">
                      <p>Alexander Pierce</p>
                      <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                  </div>
              </div>
              {/* search form */}
              <form action="#" method="get" className="sidebar-form">
                  <div className="input-group">
                      <input type="text" name="q" className="form-control" placeholder="Search..." />
                      <span className="input-group-btn">
                      <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i></button>
                    </span>
                  </div>
              </form>
              {/* /.search form */}
              {/* sidebar menu: : style can be found in sidebar.less */}
              <ul className="sidebar-menu tree">
                  <li className="header">MAIN NAVIGATION</li>
                  <li className="active treeview">
                      <a href="#">
                          <i className="fa fa-dashboard"></i>
                          <span>
                              Dashboard
                          </span>
                          <i className="fa fa-angle-left pull-right"></i>
                      </a>
                      {/* <ul className="treeview-menu">
                          <li className="active"><a href="/"><i className="fa fa-circle-o"></i> Dashboard v1</a></li>
                          <li><a href="index2.html"><i className="fa fa-circle-o"></i> Dashboard v2</a></li>
                      </ul> */}
                  </li>

                  <li className="treeview">
                      <a href="#">
                          <i className="fa fa-sticky-note-o"></i>
                          <span>Events</span>
                          <i className="fa fa-angle-left pull-right"></i>
                      </a>

                      <ul className="treeview-menu menu-open" style={style}>
                          <li> <a href="/events"><i className="fa fa-circle-o"></i> <span> Active </span> <small className="label pull-right bg-green">3</small></a></li>
                          <li> <a href="/events"><i className="fa fa-circle-o"></i> <span> Complete </span> <small className="label pull-right bg-green">4</small></a></li>
                      </ul>
                  </li>

                  <li>
                      <a href="/calendar">
                          <i className="fa fa-calendar"></i> <span>Calendar</span>
                          <small className="label pull-right bg-red">3</small>
                      </a>
                  </li>
              </ul>
          </section>
          {/* /.sidebar */}
      </aside>
    );
  }
}
