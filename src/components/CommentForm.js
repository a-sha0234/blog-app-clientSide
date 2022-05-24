import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";

export default function CommentForm(props) {
  const [submit, setSubmit] = useState(false);

  const [comments, setComments] = useState([]);

  const [commentFormData, setCommentFormData] = useState({
    name: "",
    comment: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setCommentFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    commentFormData.id = props.data.apiData._id;
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
  }, [submit]);

  return (
    <div>
      {comments.map((comments) => {
        return <CommentCard comments={comments} />;
      })}
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="name"
          value={commentFormData.name}
          onChange={handleChange}
        ></input>
        {/*  */}
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
