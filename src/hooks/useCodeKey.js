import {useState, useEffect} from 'react';

export const useCodeKey = (state) => {
  const [codeKey, setCodeKey] = useState(state);

  useEffect(() => {
    if (location.pathname.includes('/auth')) {
      const codeKey = new URLSearchParams(location.search.substring(1))
        .get('code');
      setCodeKey(codeKey);
    }

    if (localStorage.getItem('code')) {
      setCodeKey(localStorage.getItem('code'));
    }
  }, []);

  useEffect(() => {
    if (codeKey) {
      localStorage.setItem('code', codeKey);
    }
  }, [codeKey]);

  const delCodeKey = () => {
    localStorage.removeItem('code');
  };

  return [codeKey, delCodeKey];
};
