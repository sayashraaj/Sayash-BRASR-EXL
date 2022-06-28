// <PrivateRoute exact path="/locked" component={LockedMaterial} />
// <Route exact path="/" component={Landing} />

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import PrivateRoute from './PrivateRoute'
import LockedMaterial from './LockedMaterial'
import PleaseLogin from './PleaseLogin'

import Chat from './Chat/Chat';
import Join from './Join/Join';
import Switcher from './Switcher';

import Map from './mapbox/Map';

import './app.css';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Map} />
            <Route exact path="/PleaseLogin" component={PleaseLogin} />
            <PrivateRoute path="/locked/" component={LockedMaterial} />
            <PrivateRoute path="/chat" component={Switcher} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
