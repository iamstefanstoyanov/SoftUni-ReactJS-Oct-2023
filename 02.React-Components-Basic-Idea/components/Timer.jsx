import { useState } from 'react';
export default function Timer(props) {

  const [time,setTime] = useState(0)

  setTimeout(() => {
    setTime(time+1)
  }, 2000);

  return (
    <div>
      <h3>Timer:{time}</h3>
    </div>
  );
}
