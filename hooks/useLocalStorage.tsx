import React, { useEffect, useState } from 'react';

const useLocalStorage = (key: string, initial = []) => {
  const [localList, setLocalList] = useState<any[]>(() => {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem(key);

      return stored ? JSON.parse(stored) : initial;
    }
    return initial;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(localList));
  }, [key, localList]);

  const setStorage = (newMovie: any) => {
    const { id, title, poster_path } = newMovie;
    let oldList = localList;
    if (oldList.length > 10) {
      oldList.pop();
    }
    oldList = oldList.filter((item) => item.id !== id);
    const newSet = [{ id, title, poster_path }, ...oldList];
    setLocalList(newSet);
    window.dispatchEvent(new Event('storage'));
  };
  return { localList, setStorage };
};

export default useLocalStorage;
