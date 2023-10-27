import { useState, useEffect } from 'react';
import earth from './world.svg';

function AccessButton({ text, color }) {
  const buttonStyle = {
    '--buttonBackground': `var(${color})`,
  };

  return (
    <button className="accessButton" style={buttonStyle}>
      {text}
    </button>
  );
}

function GoTo({ text, prompt, color }) {
  return (
    <div>
      <span style={{ fontSize: '2vmin' }}>{text}</span>
      <a
        style={{
          color: `var(${color})`,
          fontWeight: 'bolder',
          fontSize: '2vmin',
        }}
      >
        {prompt}
      </a>
    </div>
  );
}

function AccessBox({ type }) {
  let text;
  let prompt;
  let buttonText;
  let color;
  if (type === 'login') {
    text = 'Dont have an account? ';
    prompt = 'Sign up';
    buttonText = 'Log in';
    color = '--login-button-background';
  } else if (type === 'signup') {
    text = 'Alreay have an account? ';
    prompt = 'Log in';
    buttonText = 'Sign up';
    color = '--signup-button-background';
  }
  return (
    <div className="accessBox">
      <div className="inputField">Email</div>
      <div className="inputField">Password</div>
      <AccessButton text={buttonText} color={color} />
      <GoTo text={text} prompt={prompt} color={color} />
    </div>
  );
}

export default function body() {
  return (
    <div className="body">
      <div className="appWrapper">
        <div className="background">
          <Stars />
          <div className="planetWrapper">
            <div className="planet">
              <img className="earth" src={earth}></img>
              <img className="earth" src={earth}></img>
              <div className="planetShadow"></div>
            </div>
          </div>
        </div>
        <div className="accessWrapper">
          <div className="title">MUNDONGO</div>
          <AccessBox type={'signup'} />
          <AccessBox type={'login'} />
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
