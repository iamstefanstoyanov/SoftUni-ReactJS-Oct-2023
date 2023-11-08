import { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
export default function CharacterDetails() {
  const { id } = useParams();
  const [char, setChar] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}`)
      .then(response => {
        if(!response.ok){
        throw new Error('Not Found');
        }
        return response.json();
      })
      .then(setChar)
      .catch((e)=>{
        navigate('/characters')
      })
  }, [id]);
  return (
    <>
      <h1>{char.name}</h1>
      <p>{char.height}</p>
    </>
  );
}
