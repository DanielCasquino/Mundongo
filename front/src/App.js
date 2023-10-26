import { useState } from 'react';

function LoginBox() {
  return (
    <div className="loginBox">
      <div className="inputField">email</div>
      <div className="inputField">password</div>
    </div>
  );
}

export default function body() {
  return (
    <div className="body">
      <div className="appWrapper">
        <div className="loginBackground"></div>
        <div className="loginWrapper">
          <LoginBox />
        </div>
      </div>
    </div>
  );
}
