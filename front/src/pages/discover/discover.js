import { useState, useEffect } from 'react';
import './discover.css';
import arrow from './chevron_right_FILL0_wght400_GRAD0_opsz24.svg';
import dawg from './F1-ZVoKXsAIW8EU.jpg';


function SearchBar(){
  return(
    <input className='searchBar' placeholder='Start typing to search for a cool place!'></input>
  );
}

function CollapseButton({ onClick, status}) {
  return (
    <button className='collapseButton' onClick={onClick}>
      <img className={status ? "collapseImage" : "collapseImage rotated"} src={arrow} alt="Arrow" />
    </button>
  );
}

export default function body() {
  const [collapsedBar, setCollapse] = useState(true);

  function showBar(){
    setCollapse(!collapsedBar);
    console.log("set status to " + !collapsedBar);
  }

  let leftClass = collapsedBar ? "left" : "left closed";

  return (
    <div className="body discover">
      <div className="appWrapper">
        <div className="background"></div>
        <div className="discoverWrapper">
          <div className="contentWrapper">
            <div className={leftClass}>
              <img src={dawg} style={{objectFit: "contain"}}/>
            </div>
            <div className="right">
              <div className='top'>
              <CollapseButton onClick={() => showBar()} status={collapsedBar}/>
              <SearchBar/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
