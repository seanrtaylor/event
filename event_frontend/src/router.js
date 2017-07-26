import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import EventForm from "./components/events/EventForm";
import Calendar from "./components/events/Calendar";
// import EventForm from "./components/eventform";
// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="events" component={EventForm}/>
      <Route path="calendar" component={Calendar}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// export
export { router };
