import { useEffect, useState } from 'react';
import CharacterCard from './Card';

const url = 'https://swapi.dev/api/';
export default function CharactersList() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const abortCtlr = new AbortController();
    fetch(`${url}` + 'people',{signal: abortCtlr.signal})
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
      });
      return ()=>{
        abortCtlr.abort();
      }
  }, []);
  return (
    <>
      {characters.map((c, i) => (
        <CharacterCard key={c.name} id={i + 1} {...c} />
      ))}
    </>
  );
}
