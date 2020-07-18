import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class Dashboard extends Component {
  async componentDidMount() {
    this.props.getDashboard()
  }

  render() {
    return (
      <div>
        <h1>This is dashboard</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state', state)
  return {
    secret: state.dash.secret,
    dashboard: state.dash,
    auth: state.auth
  }
}

export default connect(mapStateToProps, actions)(Dashboard);
