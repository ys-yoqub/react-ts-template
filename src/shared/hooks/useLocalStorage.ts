const useLocalStorage = () => {
  const get = <T>(key: string, defaultValue: T): T => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  };

  const set = <T>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  return { get, set };
};

export default useLocalStorage;
