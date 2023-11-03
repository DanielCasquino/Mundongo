import { useState, useEffect } from 'react';
import './discover.css';

// function Card({ n }) {
//   // Se hace un fetch para la info, gatitos placeholders

//   let name = `A really cool place with an index of ${n}`;
//   let description =
//     n === 8 ? 'Lorem ipsum I guess' : `(A really cool description)`;
//   return (
//     <div className="card">
//       <img className="placePhoto" src="https://cataas.com/cat"></img>
//       <div className="placeDetails">
//         <div className="placeName">{name}</div>
//         <div className="placeDescription">{description}</div>
//       </div>
//     </div>
//   );
// }

export default function body() {
  // const cards = [];
  // for (let i = 0; i < 20; ++i) {
  //   cards.push(<Card key={i} n={i} />);
  // }
  return (
    <div className="body discover">
      <div className="appWrapper">
        <div className="background"></div>
        <div className="discoverWrapper">
          <div className="contentWrapper">
            <div className="left"></div>
            <div className="right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
