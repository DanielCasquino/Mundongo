import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './post.css';

export default function Post() {
  const { id } = useParams();

  return (
    <div className="body post">
      <div className="appWrapper">
        <div className="background">
          <span>
            This page will display information about an event with an id of {id}
          </span>
        </div>
      </div>
    </div>
  );
}
