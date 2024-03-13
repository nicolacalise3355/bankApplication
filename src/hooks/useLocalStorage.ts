import { useState } from 'react';
import { IStorageResult, StorageType } from '../interfaces/StorageInterfaces';

const useLocalStorage = (initialValue: StorageType, localStorageKey: string): IStorageResult => {
  const storedValue = localStorage.getItem(localStorageKey);
  const [value, setValue] = useState<StorageType>(storedValue ? JSON.parse(storedValue) : initialValue);

  const setStorageValue = (newValue: StorageType) => {
    setValue(newValue);
    localStorage.setItem(localStorageKey, JSON.stringify(newValue));
  };

  return {
    value,
    setValue: setStorageValue,
  };
};

export default useLocalStorage;
