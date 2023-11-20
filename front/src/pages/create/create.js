import { useState, useEffect } from "react";
import "./create.css";

import back from "./chevron_right_FILL0_wght400_GRAD0_opsz24.svg";
import upload from "./upload_FILL0_wght400_GRAD0_opsz24.svg";
import close from "./close_FILL0_wght400_GRAD0_opsz24.svg";

const cloud_name = "ddlluqviq";
const cloud_key = "147727834385164";
const upload_preset = "jax1og5o";
const cloud_url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload?upload_preset=${upload_preset}&api_key=${cloud_key}`;

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
  const uploadImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (readerEvent) => {
        const imageDataURL = readerEvent.target.result;
        setImage(imageDataURL);
      };

      reader.readAsDataURL(file);
    }
  }; // TODO: NO FUNCIONA :(

  const removeImage = () => {
    setImage(null);
  };

  return (
    <div className="imageArea">
      <div className="title">Event Image</div>
      <div className="imageWrapper">
        {image ? (
          <>
            <img className="uploadedImage" src={image} alt="Uploaded" />
            <button className="removeButton" onClick={removeImage}>
              <img src={close} className="removeIcon"></img>
            </button>
          </>
        ) : (
          <label htmlFor="uploadInput" className="uploadButton">
            <input
              type="file"
              id="uploadInput"
              accept="image/*"
              onChange={uploadImage}
              style={{ display: "none" }}
            />
            <img className="image" src={upload} alt="Upload" />
          </label>
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
    console.log("Set " + name + " to " + value);
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
            autoComplete="name"
            value={data.name}
            onChange={handleChange}
          />

          <input
            className="inputField"
            placeholder="City"
            name="city"
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
            id="description"
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
    <>
      <div className="createWrapper">
        <DataArea data={data} setData={setData}></DataArea>
        <ImageArea image={image} setImage={setImage}></ImageArea>
      </div>
    </>
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

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={`body create${theme === "light" ? "" : " dark"}`}>
      <div className="appWrapper">
        <div className="contentWrapper">
          <div className="content">
            <TopBar />
            <CreateArea />
            {isLoading ? <LoadingScreen /> : <></>}
          </div>
        </div>
      </div>
    </div>
  );
}

function LoadingScreen() {
  return <div className="loadingScreen"></div>;
}
