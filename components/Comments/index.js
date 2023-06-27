export default function Comments({ comments }) {
    if (!comments) return <container>no comments found ...</container>;
    return (
        <>
        <h2>Comments</h2>
        {comments.map((commentEntry) => (
          <comment key={commentEntry.comment}>
            <p>
              on {commentEntry.datetime.toLocaleDateString()} at{" "}
              {commentEntry.datetime.getHours()}:
              {commentEntry.datetime.getMinutes()}
            </p>
            <p>{commentEntry.comment}</p>
          </comment>
        ))}
      </>
    );
  }