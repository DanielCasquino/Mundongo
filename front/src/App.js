import { useState, useEffect } from 'react';
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
          <Stars />
          <div className="planetWrapper">
            <div className="planet">
              <img className="earth" src={earth}></img>
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

function Stars() {
  useEffect(() => {
    createRandomStars();
  }, []);

  const createRandomStars = () => {
    const container = document.querySelector('.starWrapper');
    const starNumber = 100;
    for (let i = 0; i < starNumber; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      const xOffset = Math.random() * 100;
      const yOffset = Math.random() * 100;
      const animDelay = Math.random() * 5 * (Math.random() / 2);
      const duration = 0.5 + Math.random();
      star.style.left = `${xOffset}%`;
      star.style.top = `${yOffset}%`;
      star.style.animationDelay = `${animDelay}s`;
      star.style.setProperty('--duration', `${duration}s`);
      container.appendChild(star);
    }
  };

  return <div className="starWrapper"></div>;
}
