export default function CommentCard(props) {
  console.log(props);
  return (
    <div className="commentCard">
      <section className="commentCard__top">
        <p>{props.comments.name}</p>
      </section>
      <section className="commentCard__body">
        <p>{props.comments.comment}</p>
      </section>
      <section className="commentCard__bottom">
        <p>{props.comments.createdAt}</p>
      </section>
    </div>
  );
}
