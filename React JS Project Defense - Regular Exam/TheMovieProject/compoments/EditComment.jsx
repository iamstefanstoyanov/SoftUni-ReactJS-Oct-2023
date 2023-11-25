import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCurrentComment } from '../services/commentsService';
import { Link } from 'react-router-dom';
import useForm from '../hooks/useForm';
const formKeys = {
  text: 'text',
};
export default function EditComment() {
  const { id } = useParams();
  const [comment, setComment] = useState({});
  useEffect(() => {
    getCurrentComment(id).then((data) => {
      setComment(data);
    });
  }, [id]);
  const editCommentHandler = (data) => {
    console.log(data);
  };
  const { inputs, onChangeInput, submitForm } = useForm(editCommentHandler, {
    [formKeys.text]: '',
  });
  return (
    <>
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
    </>
  );
}
