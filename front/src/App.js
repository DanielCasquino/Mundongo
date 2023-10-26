import { useState } from 'react';
import earth from './world.svg';

function LoginButton() {
  return <button className="loginButton">Log In</button>;
}

function LoginBox() {
  return (
    <div className="loginBox">
      <div className="inputField">Email</div>
      <div className="inputField">Password</div>
      <LoginButton />
    </div>
  );
}

export default function body() {
  return (
    <div className="body">
      <div className="appWrapper">
        <div className="loginBackground">
          <div className="planetWrapper">
            <div className="planet">
              <img className="earth" src={earth}></img>
              <div className="planetShadow"></div>
            </div>
          </div>
        </div>
        <div className="loginWrapper">
          <div className="title">MUNDONGO</div>
          <LoginBox />
        </div>
      </div>
    </div>
  );
}
