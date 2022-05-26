import CommentForm from "./CommentForm";

export default function BlogDetails(props) {
  console.log(props);

  let timeCreated = props.apiData.createdAt;
  let strTimeAndDataCreated = timeCreated.split("T"); // store time and date blog was added

  let updatedAt = props.apiData.updatedAt.split("T"); // store time and data blog was last updated

  return (
    <div>
      <div className="blogDetails">
        <div className="blogDetails__top">
          <h1>{props.apiData.title}</h1>
          <h2>Author: {props.apiData.Author}</h2>
          <p>Created at:{strTimeAndDataCreated[0]}</p>
          <p>Last updated at: {updatedAt[0]}</p>
        </div>

        <section className="blogDetails__body">
          <p>{props.apiData.blogtext}</p>
        </section>
      </div>

      <section className="commentSection">
        {/* send blog data to comment form  */}
        <CommentForm data={props} />
      </section>
    </div>
  );
}
