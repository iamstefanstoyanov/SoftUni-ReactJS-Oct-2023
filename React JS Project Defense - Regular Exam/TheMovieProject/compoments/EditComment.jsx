import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { editComment, getCurrentComment } from '../services/commentsService';
import { Link } from 'react-router-dom';
import { useNavigate,useLocation } from 'react-router-dom';

import Spinner from './Spinner';
import useForm from '../hooks/useForm';
const formKeys = {
  text: 'comment',
};
export default function EditComment() {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const [comment, setComment] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    getCurrentComment(id)
      .then((data)=>{
        setComment(data)
      })
      .finally(() => setIsLoading(false));
    }, []);
    const editCommentHandler = (newComment) => {
      editComment(newComment)
      navigate('/profile')
    };
    const { inputs, onChangeInput, submitForm } = useForm(editCommentHandler, comment);
    
  return (
    <>
      <h1>Edit Comment</h1>
      {isLoading && <Spinner />}
      {!isLoading && (
        <div className='edit-comment'>
          <form className='form' onSubmit={submitForm}>
            <textarea
              type='text'
              name={formKeys.text}
              value={inputs[formKeys.text]}
              onChange={onChangeInput}
            />
            <Link to='/profile'>
              <button type='button' className='close'>
                Close
              </button>
            </Link>
            <input className='btn-submit' type='submit' value='Edit Comment' />
          </form>
        </div>
      )}
    </>
  );
}
