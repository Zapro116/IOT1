import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';

import * as actions from '../actions';
import CustomInput from './CustomInput';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(formData) {
    await this.props.signUp(formData);
    if (!this.props.errorMessage) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="row signup mt-5">
        <div className="col-md-6 col-12 mt-5">
        <div className="card crd p-3 mt-2">
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <h1>Sign Up</h1>
            <hr className="hr" />
            <fieldset>
              <Field
                name="email"
                type="text"
                id="email"
                label="Enter your email"
                placeholder="Email"
                component={ CustomInput } />
            </fieldset>
            <fieldset>
              <Field
                name="password"
                type="password"
                id="password"
                label="Enter your password"
                placeholder="Password"
                component={ CustomInput } />
            </fieldset>

            { this.props.errorMessage ?
            <div className="alert alert-danger">
              { this.props.errorMessage }
            </div> : null }

            <button type="submit" className="btn btn-outline-success"> Sign Up <i className="fas fa-arrow-right"> </i></button>
          </form>
        </div>
        <div className="col-md-5">
        </div>
      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage
  }
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signup' })
)(SignUp)
