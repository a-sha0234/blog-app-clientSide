import { useState, useEffect } from "react";

export default function Card(props) {
  let timeCreated = props.post.createdAt;
  let strTimeCreated = timeCreated.split("T"); // store date and time created

  let route = `/post/${props.post._id}`; // route for each dteails about about blog

  return (
    <a href={route} className="container">
      <main className="cardContainer">
        <div className="cardContainer__side"></div>
        <section className="cardContainer__content">
          {/* <div> */}
          <p className="cardContainer__title">{props.post.title}</p>
          {/* </div> */}
          {/* <div> */}
          <p className="cardContainer__date">
            Date posted: {strTimeCreated[0]}
          </p>
          {/* </div> */}
          {/* <div> */}
          <p className="cardContainer__date">
            Last updated: {strTimeCreated[0]}
          </p>
          {/* </div> */}
        </section>
      </main>
    </a>
  );
}
