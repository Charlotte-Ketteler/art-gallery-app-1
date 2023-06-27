export default function CommentForm({ onSubmitComment }) {
    function handleSubmit(event) {
      event.preventDefault();
      const { comment } = event.target.elements;
      onSubmitComment(comment.value);
      event.target.reset();
    }
    return (
      <form onSubmit={handleSubmit} aria-label="add comments about art piece">
        <label htmlFor="comment">Add comment:</label>
        <textarea type="text" id="comment" name="comment" rows="3" required />
        <button type="submit">Send</button>
      </form>
    );
  }