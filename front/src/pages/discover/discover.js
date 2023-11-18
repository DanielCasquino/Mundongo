import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

import './discover.css';
import arrow from './chevron_right_FILL0_wght400_GRAD0_opsz24.svg';
import profile from './person_FILL0_wght400_GRAD0_opsz24.svg';
import bocchi from './therock.jpg';
import dawg from './dawg.png';
import Cookies from 'js-cookie';
import vineBoom from './vineBoom.mp3';

const ip = 'localhost';

function SearchBar() {
  return (
    <input
      className="searchBar"
      placeholder="I look cool but I don't work :)"
      name="searchBar"
    ></input>
  );
}

function CollapseButton({ onClick, status }) {
  return (
    <button className="collapseButton" onClick={onClick}>
      <img
        className={status ? 'collapseImage' : 'collapseImage rotated'}
        src={arrow}
      />
    </button>
  );
}

function UserBar({ isDarkMode, setDarkMode }) {
  const [collapsed, setCollapsed] = useState(false);

  function collapse() {
    setCollapsed(!collapsed);
  }

  function logOut() {
    Cookies.remove('token');
    window.location.href = '/access';
  }

  function hehe() {
    window.location.href = 'https://www.youtube.com/watch?v=_OMFqXy3j1g';
  }

  function switchTheme() {
    setDarkMode(!isDarkMode);
    localStorage.setItem('isDarkMode', !isDarkMode);
  }

  const barClass = collapsed ? 'userBar userBarCollapsed' : 'userBar';
  return (
    <div className={barClass}>
      <div className="userOptions">
        <button className="userLink" onClick={hehe}>
          Profile
        </button>
        <button className="userLink" onClick={switchTheme}>
          Theme
        </button>
        <button className="userLink" onClick={logOut}>
          Log Out
        </button>
      </div>
      <button className="userButton" onClick={collapse}>
        <img className="userAvatar" src={dawg}></img>
      </button>
    </div>
  );
}

function TagCreator({ tagData }) {
  const tags = [];
  for (let i = 0; i < tagData.length; ++i) {
    var currentTag = tagData[i];
    tags.push(
      <span
        key={i}
        className="tag"
        style={{ background: `${currentTag.color}` }}
      >
        {currentTag.name}
      </span>
    );
  }
  return <>{tags}</>;
}

function Card({ data, imageSrc }) {
  console.log(imageSrc);
  return (
    <div className="card">
      <div className="text">
        <span className="name">{data.name}</span>
        <span className="location">
          {data.city}, {data.country}
        </span>
      </div>
      <div className="thumbnail">
        <img className="image" src={imageSrc}></img>
      </div>
      <div className="tags">
        <TagCreator tagData={data.tags} />
      </div>
    </div>
  );
}

function CardCreator() {
  const apiUrl = `http://${ip}:8080/api/events/nocomments`;
  const [items, setItems] = useState([]);

  const fetcher = axios.create({
    baseURL: apiUrl,
    withCredentials: false,
  });

  useEffect(() => {
    fetcher
      .get()
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const createRows = () => {
    const cardsPerRow = 3;
    const rows = [];
    for (let i = 0; i < items.length; i += cardsPerRow) {
      const row = (
        <div key={i} className="cardRow">
          {items.slice(i, i + cardsPerRow).map((item) => (
            <Card
              key={item.id}
              data={item}
              imageSrc={`https://cataas.com/cat?${item.id}`}
            />
          ))}
        </div>
      );
      rows.push(row);
    }
    return rows;
  };

  return <>{createRows()}</>;
}

function Filter() {
  const apiUrl = `http://${ip}:8080/api/tags`;
  const [tags, setTags] = useState([]);

  const fetcher = axios.create({
    baseURL: apiUrl,
    withCredentials: false,
  });
  useEffect(() => {
    fetcher
      .get()
      .then((response) => {
        setTags(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
  console.log(tags);
  const tagCheckboxes = tags.map((tag) => (
    <label key={tag.id} className="tagFilter">
      <input type="checkbox" value={tag.id} className="checkbox" />
      {tag.name}
    </label>
  ));
  return (
    <div className="filterWrapper">
      <span className="title">Tags</span>
      <div className="tagContainer">{tagCheckboxes}</div>
      <img
        src={bocchi}
        style={{
          objectFit: 'contain',
          marginTop: '8vmin',
        }}
      ></img>
      <img
        src={bocchi}
        style={{
          objectFit: 'contain',
          marginTop: '8vmin',
        }}
      ></img>
    </div>
  );
}

export default function Discover() {
  const [collapsedBar, setCollapse] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  function showBar() {
    setCollapse(!collapsedBar);
    console.log('set status to ' + !collapsedBar);
    const playSound = () => {
      const audio = new Audio(vineBoom);
      audio.play();
    };
    playSound();
  }

  let leftClass = collapsedBar ? 'left' : 'left leftClosed';

  return (
    <div className={isDarkMode ? 'body discover dark' : 'body discover'}>
      <div className="appWrapper">
        <div className="contentWrapper">
          <div className="content">
            <div className={leftClass}>
              <Filter />
            </div>
            <div className="right">
              <div className="top">
                <CollapseButton
                  onClick={() => showBar()}
                  status={collapsedBar}
                />
                <SearchBar />
                <UserBar isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
              </div>
              <div className="cardContainer">
                <CardCreator />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
