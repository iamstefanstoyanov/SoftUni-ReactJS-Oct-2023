const deleteCommentHandler = (id) => {
    deleteComment(id, 'fb352199-bcbc-4e1d-a1dc-ed346a6fb49a');
    setUser((state) => {
      state.comments = Object.values(user.comments).filter((c) => c.id !== id);
    });
  };
  onClick={(e) => deleteCommentHandler(e.target.id)}
  import { deleteComment } from '../services/commentsService';