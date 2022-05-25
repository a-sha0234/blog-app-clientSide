import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";

export default function CommentForm(props) {
  const [submit, setSubmit] = useState(false); // track when comment is submitted

  const [comments, setComments] = useState([]); // holds comments for blog

  const [commentFormData, setCommentFormData] = useState({
    // form data
    name: "",
    comment: "",
  });

  function handleChange(event) {
    // handle change with every keystroke
    const { name, value } = event.target;
    setCommentFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    commentFormData.id = props.data.apiData._id; // add current id of blog to each document in database
    e.preventDefault();
    //create a comment
    fetch("http://localhost:3002/add/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(commentFormData),
    });

    setSubmit((prev) => {
      // cause the tracker to change values
      return !prev;
    });
  }

  useEffect(() => {
    fetch(`http://localhost:3002/posts/${props.data.apiData._id}/comment`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((result) => {
      return result.json().then((comments) => {
        setComments(comments);
      });
    });
  }, [submit]); // this runs everytime the user presses the submit button

  return (
    <div>
      {comments.map((comments) => {
        return <CommentCard comments={comments} />;
      })}
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          name="name"
          value={commentFormData.name}
          onChange={handleChange}
        ></input>
        {/*  */}
        <label>comment:</label>
        <textarea
          name="comment"
          value={commentFormData.comment}
          onChange={handleChange}
        ></textarea>

        {/*  */}

        <button>post</button>
      </form>
    </div>
  );
}
