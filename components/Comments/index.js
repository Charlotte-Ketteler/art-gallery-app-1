export default function Comments({ comments }) {
    if (!comments) return <container>no comments found ...</container>;
    return (
        <>
        <h2>Comments</h2>
        {comments.map((commentEntry) => {
        const dateTime = new Date(commentEntry.datetime);
        return (
          <comment key={commentEntry.comment}>
            <p>
              on {dateTime.toLocaleDateString()} at {dateTime.getHours()}:
              {dateTime.getMinutes()}
            </p>
            <p>{commentEntry.comment}</p>
          </comment>
        );
      })}
      </>
    );
  }