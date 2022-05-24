import CommentForm from "./CommentForm";

export default function BlogDetails(props) {
  console.log(props);
  return (
    <div className="blogDetails">
      <div className="blogDetails__top">
        <h1>{props.apiData.title}</h1>
        <h2>{props.apiData.Author}</h2>
        <p>{props.apiData.createdAt}</p>
        <p>{props.apiData.updatedAt}</p>
      </div>
      <section className="blogDetails__body">{props.apiData.blogtext}</section>

      <section>
        {/* send blog data as  */}
        <CommentForm data={props} />
      </section>
    </div>
  );
}
