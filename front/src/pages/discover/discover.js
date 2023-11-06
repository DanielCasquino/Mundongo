import { useState, useEffect } from 'react';
import './discover.css';
import arrow from './chevron_right_FILL0_wght400_GRAD0_opsz24.svg';
import dawg from './F1-ZVoKXsAIW8EU.jpg';


function SearchBar(){
  return(
    <input className='searchBar' placeholder='Start typing to search for cool stuff!'></input>
  );
}

function CollapseButton({ onClick, status }) {
  return (
    <button className='collapseButton' onClick={onClick}>
      <img className={status ? "collapseImage" : "collapseImage rotated"} src={arrow} alt="Arrow" />
    </button>
  );
}

function RandomTags(){
  const randomTags = [];
  const tagNumber = Math.floor(Math.random() * 3) + 1;
  for (let i = 0; i < tagNumber; ++i){
    const rand = Math.floor(Math.random() * 3) + 1;
    let color = "";
    let text = "Tag " + i;
    switch(rand){
      case 1: color = "var(--fuchsia)"; break;
      case 2: color = "var(--grass)"; break;
      case 3: color = "var(--mandarina)"; break;
    }
    const tagStyle = {
      '--data': `${color}`,
    };
    randomTags.push(<div key={i} className='tag' style={tagStyle}>{text}</div>)
  }
  return randomTags;
}

function Card({title, location}){
  return(
    <div className='card'>
      <div className='text'>
        <div className='name'>{title}</div>
        <div className='location'>{location}</div>
      </div>
      <div className='thumbnail'>
        <img className="image" src='https://cataas.com/cat'></img>
      </div>
      <div className='tags'>
      {<RandomTags/>}
      </div>
    </div>
  )
}

function CardRow({rowIndex}){
  const cards = [];
  for (let i = 0; i < 3; ++i){
    let cardIndex = 3 * rowIndex + i;
    cards.push(<Card key={i} title={"Event " + cardIndex} location={"City, Country"}/>)
  }
  return(
    <div className='cardRow'>{cards}</div>
  )
}

export default function body() {
  const [collapsedBar, setCollapse] = useState(false);

  function showBar(){
    setCollapse(!collapsedBar);
    console.log("set status to " + !collapsedBar);
  }

  let leftClass = collapsedBar ? "left" : "left closed";

  const cardRows = [];
  for (let i = 0; i < 4; ++i){
    cardRows.push(<CardRow key={i} rowIndex={i}/>);
  }

  return (
    <div className="body discover">
      <div className="appWrapper">
        <div className="background"></div>
        <div className="discoverWrapper">
          <div className="contentWrapper">
            <div className={leftClass}>
              <button className='logoutButton'>Log Out</button>
            </div>
            <div className="right">
              <div className='top'>
              <CollapseButton onClick={() => showBar()} status={collapsedBar}/>
              <SearchBar/>
              </div>
              <div className='cardContainer'>{cardRows}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
