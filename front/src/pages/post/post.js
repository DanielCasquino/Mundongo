import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./post.css";

export default function Post() {
  const { id } = useParams();

  return (
    <div className="body post">
      <div className="appWrapper">
        <div className="contentWrapper">
          <div className="content">
            <div className="postData">
              <div className="top">
                We'll have data about event {id} eventually
              </div>
              <div className="middle">
                <div className="photoViewer">Images will go here</div>
                <div className="infoViewer">Text over here</div>
              </div>
              <div className="bottom">Some extra info over here I guess</div>
            </div>
            <div className="postComments">And comments down here</div>
          </div>
        </div>
      </div>
    </div>
  );
}
