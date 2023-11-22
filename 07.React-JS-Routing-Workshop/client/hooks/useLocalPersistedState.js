import { useState } from 'react';
export default function usePersistedState(key, defValue) {
  const [state, setState] = useState(() => {
    const persistedState = localStorage.getItem(key);
    if (persistedState) {
      return JSON.parse(persistedState);
    }
    return defValue;
  });

  const setPersistedState = (value) => {
    setState(value);
    let sertilizedValue;
    if (typeof value === 'function') {
        sertilizedValue = JSON.stringify(value(state));
    }else{
        sertilizedValue = JSON.stringify(value);

    }
   

    localStorage.setItem(key, sertilizedValue);
  };
  return [state, setPersistedState];
}
