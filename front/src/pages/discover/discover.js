import { useState, useEffect } from 'react';
import axios from 'axios';

import './discover.css';
import arrow from './chevron_right_FILL0_wght400_GRAD0_opsz24.svg';
import Cookies from 'js-cookie';

function SearchBar() {
  return (
    <input
      className="searchBar"
      placeholder="Start typing to search for cool stuff!"
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
        alt="Arrow"
      />
    </button>
  );
}

function Card({ data }) {
  return (
    <div className="card">
      <div className="text">
        <div className="name">{data.name}</div>
        <div className="location">
          {data.city}, {data.country}
        </div>
      </div>
      <div className="thumbnail">
        <img className="image" src="https://cataas.com/cat"></img>
      </div>
      <div className="tags"></div>
    </div>
  );
}

function CardCreator() {
  const apiUrl = 'http://localhost:8080/api/events/nocomments';
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
  });

  const createRows = () => {
    const rows = [];
    for (let i = 0; i < items.length; i += 3) {
      const row = (
        <div key={i} className="cardRow">
          {items.slice(i, i + 3).map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      );
      rows.push(row);
    }
    return rows;
  };

  return <>{createRows()}</>;
}

export default function Discover() {
  const [collapsedBar, setCollapse] = useState(false);

  function showBar() {
    setCollapse(!collapsedBar);
    console.log('set status to ' + !collapsedBar);
  }

  function logOut() {
    Cookies.remove('token');
    window.location.href = '/access';
  }
  let leftClass = collapsedBar ? 'left' : 'left closed';

  return (
    <div className="body discover">
      <div className="appWrapper">
        <div className="contentWrapper">
          <div className="content">
            <div className={leftClass}>
              <button className="logoutButton" onClick={logOut}>
                Log Out
              </button>
            </div>
            <div className="right">
              <div className="top">
                <CollapseButton
                  onClick={() => showBar()}
                  status={collapsedBar}
                />
                <SearchBar />
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
