import React from 'react';
import './Login.css';
import backgroundImage from '../../../public/bg.jpeg';

const Login = () => {
  return (
    <div className="page-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="login-container">
        <h1 className="login-title">Register your events and let Aidie manage your reminders!</h1>
        <form className="form">
          <label className="label">
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
            />
          </label>
          <label className="label">
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Password"
            />
          </label>
          <button
            type="submit"
            className="button"
          >
            LET'S GO!
          </button>
        </form>
        <p className="paragraph">
          Can't remember your password? <a href="#" className="link">Click here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
