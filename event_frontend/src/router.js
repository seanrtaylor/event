import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import EventForm from "./components/events/EventForm";
import Calender from "./components/events/Calender";
// import EventForm from "./components/eventform";
// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="events" component={EventForm}/>
      <Route path="calender" component={Calender}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// export
export { router };
