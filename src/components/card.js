import { useState, useEffect } from "react";

export default function Card(props) {
  let timeCreated = props.post.createdAt;
  let strTimeCreated = timeCreated.split("T"); // store date and time created

  let route = `/post/${props.post._id}`;

  return (
    <main>
      <a href={route}>
        <div>
          <p>{props.post.title}</p>
        </div>
        <div>Date posted: {strTimeCreated[0]}</div>
      </a>
    </main>
  );
}
