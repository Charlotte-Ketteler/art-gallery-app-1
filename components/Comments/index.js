export default function Comments({ comments }) {
    return (
      <>
        <title>Comments</title>
        <ul role="list">
          {comments.map((comment, index) => (
            <li key={index}>
              <p>
                <q>{comment}</q>
              </p>
            </li>
          ))}
        </ul>
      </>
    );
  }