import { useState, useEffect } from "react";
import "./create.css";

import back from "./chevron_right_FILL0_wght400_GRAD0_opsz24.svg";
import upload from "./upload_FILL0_wght400_GRAD0_opsz24.svg";

function TopBar() {
  const goBack = () => {
    window.location.href = "/discover";
  };
  return (
    <div className="topBar">
      <button className="homeButton" onClick={goBack}>
        <img className="homeImage" src={back}></img>
      </button>
    </div>
  );
}

function ImageArea({ image, setImage }) {
  return (
    <div className="imageArea">
      <div className="title">Upload an Image</div>
      <div className="imageWrapper">
        {image ? (
          <img className="image"></img>
        ) : (
          <button className="uploadButton">
            <img className="image" src={upload} />
          </button>
        )}
      </div>
      <div className="createButtonWrapper">
        <button className="createButton">Create</button>
      </div>
    </div>
  );
}

function DataArea({ data, setData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <div className="dataArea">
      <div className="title">Event Information</div>
      <div className="dataWrapper">
        <form className="dataForm">
          <input
            className="inputField"
            placeholder="Event Name"
            name="name"
            autoComplete="eventName"
            value={data.name}
            onChange={handleChange}
          />

          <input
            className="inputField"
            placeholder="City"
            name="city"
            autoComplete="city"
            value={data.city}
            onChange={handleChange}
          />

          <input
            className="inputField"
            placeholder="Country"
            name="country"
            autoComplete="country"
            value={data.country}
            onChange={handleChange}
          />

          <input
            className="inputField"
            name="date"
            type="date"
            value={data.date}
            onChange={handleChange}
          />
        </form>
        <form className="descriptionForm">
          <label htmlFor="description" style={{ paddingLeft: "2vmin" }}>
            Event description:
          </label>

          <textarea
            className="inputField"
            name="description"
            placeholder="Write a cool description for your event here! There's a 1000 character limit."
            value={data.description}
            onChange={handleChange}
            maxLength={1000}
          />
        </form>
      </div>
    </div>
  );
}

function CreateArea() {
  const [image, setImage] = useState();
  const [data, setData] = useState({
    name: "",
    city: "",
    country: "",
    date: "",
    tags: "",
    imageUrl: "",
  });
  return (
    <div className="createWrapper">
      <DataArea data={data} setData={setData}></DataArea>
      <ImageArea image={image} setImage={setImage}></ImageArea>
    </div>
  );
}

export default function Create() {
  const [theme, setTheme] = useState();

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
  }, []);

  return (
    <div className={`body create${theme === "light" ? "" : " dark"}`}>
      <div className="appWrapper">
        <div className="contentWrapper">
          <div className="content">
            <TopBar />
            <CreateArea />
          </div>
        </div>
      </div>
    </div>
  );
}
