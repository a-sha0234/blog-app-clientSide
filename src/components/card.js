import { useState, useEffect } from "react";

export default function Card(props) {
  let timeCreated = props.post.createdAt;
  let strTimeCreated = timeCreated.split("T"); // store date and time created

  let route = `/post/${props.post._id}`; // route for each dteails about about blog

  return (
    <main>
      <a href={route}>
        <div>
          <p>{props.post.title}</p>
        </div>
        <div>
          <p>Date posted: {strTimeCreated[0]}</p>
        </div>
        <div>
          <p>Last updated: {strTimeCreated[0]}</p>
        </div>
      </a>
    </main>
  );
}
