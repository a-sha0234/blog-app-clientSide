export default function CommentCard(props) {
  let timeCreated = props.comments.createdAt;
  let strTimeCreated = timeCreated.split("T");

  return (
    <div className="commentCard">
      <section className="commentCard__top">
        <p>name: {props.comments.name}</p>
      </section>
      <section className="commentCard__body">
        <p>comment: {props.comments.comment}</p>
      </section>
      <section className="commentCard__bottom">
        <p>posted: {strTimeCreated[0]}</p>
      </section>
    </div>
  );
}
