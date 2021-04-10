import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as actions from "./actions";
import { connect } from "react-redux";
import PublicHead from "../../components/publicHead";
import DefaultLayout from "../../layouts/defaultLayout";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      submitted: false,
    };
    if(localStorage.getItem("authToken")){
          this.props.history.push('/')
    }
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ submitted: true });
    const { email, password } = this.state;
    // stop here if form is invalid
    if (!(email && password)) {
      return;
    }
    // call saga reducer
    this.props.attempt(email,password)
  };
  render() {
    const { loading } = this.props;
    const { email, password, submitted  } = this.state;
    const title = "Login";
    return (
      <DefaultLayout title={title}>
        <PublicHead title={title} />
        <div className="form-box">
          <form name="form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className={'form-input' + (submitted && !email ? ' error' : '')}
                value={email}
                onChange={this.handleChange}
              />
              {submitted && !email && (
                <div className="error-block  email">Email is required.</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className={'form-input' + (submitted && !password ? ' error' : '')}
                value={password}
                onChange={this.handleChange}
              />
              {submitted && !password && (
                <div className="error-block password">Password is required.</div>
              )}
            </div>
            <div className="form-group">
              <button className="form-btn" disabled={loading}>
                  {loading ? <><i className="fas fa-spinner  fa-spin"/> loading ...</> : "Login"}
              </button>
            </div>
          </form>
        </div>
      </DefaultLayout>
    );
  }
}
const mapStateToProps = state => ({
  loading: state.login.loading
});
const mapDispatchToProps = dispatch => {
  const { attempt  } = actions;
  return bindActionCreators({ attempt }, dispatch);
};
Login.propTypes = {
    loading : PropTypes.bool,
    attempt: PropTypes.func,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    })
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
