import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./event.css";
import loadingIcon from "../../assets/sync_FILL0_wght400_GRAD0_opsz24.svg";
import backButton from "../../assets/chevron_right_FILL0_wght400_GRAD0_opsz24.svg";

const apiIp = process.env.REACT_APP_API_IP;

function fetchEventData({ id, setEventData }) {
  const apiUrl = `${apiIp}/api/events/${id}`;
  const fetcher = axios.create({
    baseURL: apiUrl,
    withCredentials: false,
  });
  fetcher
    .get(apiUrl)
    .then((response) => {
      setEventData(response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function LoadingScreen() {
  return (
    <div className="loadingScreen">
      <img className="loadingIcon" src={loadingIcon} />
      <span>Loading...</span>
    </div>
  );
}

export default function Event() {
  const { id } = useParams();
  const [theme, setTheme] = useState();
  const [eventData, setEventData] = useState(); // Fetched event data to display

  function setDarkTheme() {
    console.log("set Dark");
    setTheme("dark");
    localStorage.setItem("theme", "dark");
  }

  function setLightTheme() {
    console.log("set Light");
    setTheme("light");
    localStorage.setItem("theme", "light");
  }

  function themeSwitcher() {
    const storedTheme = localStorage.getItem("theme");
    switch (storedTheme) {
      case "dark": {
        setDarkTheme();
        break;
      }
      default: {
        setLightTheme();
        break;
      }
    }
  }

  useEffect(() => {
    themeSwitcher();
    fetchEventData({ id, setEventData });
  }, []);

  return (
    <div className={`body event${theme === "light" ? "" : " dark"}`}>
      <div className="appWrapper">
        <div className="contentWrapper">
          {eventData ? (
            <PageContent eventData={eventData} />
          ) : (
            <LoadingScreen />
          )}
        </div>
      </div>
    </div>
  ); // Wait until content is loaded
}

function PageContent({ eventData }) {
  const goHome = () => {
    window.location.href = "/discover";
  };

  return (
    <div className="content">
      <div className="dataWrapper">
        <div className="banner">
          <img className="displayImage" src="https://picsum.photos/1920/1080" />
          <div className="bannerContent">
            <div className="mainInfoDisplay">
              <div className="titleAndTags">
                <div className="left">
                  <span className="title">{eventData.name}</span>
                  <span className="title">
                    {eventData.city}, {eventData.country}
                  </span>
                </div>
                <div className="right">
                  <div className="dateWrapper">
                    <span className="title">{eventData.date}</span>
                  </div>
                  <div className="tagWrapper">
                    <TagDisplayer tags={eventData.tags} />
                  </div>
                </div>
              </div>
            </div>
            <div className="bannerInput">
              <button className="homeButton" onClick={goHome}>
                <img className="homeImage" src={backButton}></img>
              </button>
            </div>
          </div>
        </div>
        <div className="basicInfoWrapper">
          <div className="description">
            <span>{eventData.description}</span>
          </div>
        </div>
      </div>

      <div className="commentsWrapper">
        <div className="writeWrapper"></div>
        <div className="comments"></div>
      </div>
    </div>
  );
}

function TagDisplayer({ tags }) {
  const tagDivs = tags.map((tag) => (
    <div
      style={{
        background: `${tag.color}`,
      }}
      key={tag.id}
      className="tag"
    >
      {tag.name}
    </div>
  ));
  return <>{tagDivs}</>;
}
