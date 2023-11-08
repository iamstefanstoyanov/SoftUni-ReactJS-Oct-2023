import { useEffect } from 'react';
export default function Contacts() {
  useEffect(() => {
    console.log('Mount');
    const timeId = setTimeout(() => {
      console.log('2 sec')
    },2000);
    return () => {
      console.log('On unmount');
      clearTimeout(timeId)
    };
  }, []);

  return (
    <>
      <div>Contacts!</div>
      <label>Input Field:</label>
      <br />
      <input type='text' />
      <br />

      <label>Textarea:</label>
      <br />
      <textarea name=''></textarea>
      <br />

      <input type='submit' />
    </>
  );
}
