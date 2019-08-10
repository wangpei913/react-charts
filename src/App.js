import React from 'react';
import { withRouter} from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router-dom'
import ChartPage from '../src/pages/charts'
import './App.css';

function App() {
  return (
    <Switch>
        <Route path="/chart" component={ChartPage}></Route>
        <Redirect to="/chart"></Redirect>
    </Switch>
  );
}

export default withRouter(App);
