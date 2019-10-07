import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Proptypes } from "prop-types";
import { login } from "../../actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <h1>Sign in</h1>
      <p>
        <i>sign in to your account</i>
      </p>
      <form onSubmit={e => onSubmit(e)}>
        <input
          type="email"
          placeholder="email address"
          name="email"
          value={email}
          onChange={e => onChange(e)}
          required
        />

        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          minLength="8"
          onChange={e => onChange(e)}
        />

        <input type="submit" value="login" />
      </form>

      <p>
        Create an account<Link to="/register"> Sign up</Link>
      </p>
    </Fragment>
  );
};

Login.prototype = {
  login: prototype.func.isRequired,
  isAuthenticated: Proptypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
