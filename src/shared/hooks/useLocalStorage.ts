/**
 * useLocalStorage Hook
 *
 * A custom hook that provides utility methods for interacting with the browser's `localStorage`.
 *
 * This hook simplifies storing, retrieving, and removing values in `localStorage` while ensuring proper
 * serialization and deserialization of data.
 *
 * Methods:
 * - `get`: Retrieves a value from `localStorage`. If the key does not exist, it returns the provided default value.
 * - `set`: Stores a value in `localStorage` after serializing it to JSON.
 * - `remove`: Removes a value from `localStorage` by its key.
 * - `clear`: Clears all data from `localStorage`.
 *
 * @returns {object} An object containing utility methods:
 * - `get<T>(key: string, defaultValue: T): T` - Retrieves the value associated with the key.
 * - `set<T>(key: string, value: T): void` - Stores the value associated with the key.
 * - `remove(key: string): void` - Removes the value associated with the key.
 * - `clear(): void` - Clears all stored data.
 */
const useLocalStorage = (): {
  get: <T>(key: string, defaultValue: T) => T;
  set: <T>(key: string, value: T) => void;
  remove: (key: string) => void;
  clear: () => void;
} => {
  /**
   * Retrieves a value from `localStorage`.
   *
   * @template T - The type of the value being retrieved.
   * @param {string} key - The key used to retrieve the value from `localStorage`.
   * @param {T} defaultValue - The default value returned if the key does not exist.
   *
   * @returns {T} - The value associated with the key, or the default value if the key does not exist.
   */
  const get = <T>(key: string, defaultValue: T): T => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  };

  /**
   * Stores a value in `localStorage`.
   *
   * @template T - The type of the value being stored.
   * @param {string} key - The key under which the value will be stored.
   * @param {T} value - The value to store in `localStorage`.
   *
   * @returns {void}
   */
  const set = <T>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  /**
   * Removes a value from `localStorage`.
   *
   * @param {string} key - The key of the value to remove from `localStorage`.
   *
   * @returns {void}
   */
  const remove = (key: string): void => {
    localStorage.removeItem(key);
  };

  /**
   * Clears all values from `localStorage`.
   *
   * @returns {void}
   */
  const clear = (): void => {
    localStorage.clear();
  };

  // Return the utility methods with proper type annotations
  return { get, set, remove, clear };
};

export default useLocalStorage;
