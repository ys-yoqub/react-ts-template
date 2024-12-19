/**
 * useLocalStorage Hook
 *
 * A custom hook that provides utility methods for interacting with the browser's `localStorage`.
 *
 * This hook simplifies storing and retrieving values in `localStorage` while ensuring proper
 * serialization and deserialization of data.
 *
 * Methods:
 * - `get`: Retrieves a value from `localStorage`. If the key does not exist, it returns the provided default value.
 * - `set`: Stores a value in `localStorage` after serializing it to JSON.
 *
 * Note:
 * Ensure the provided `defaultValue` matches the expected type of the stored value.
 *
 * Example Usage:
 * ```tsx
 * const { get, set } = useLocalStorage();
 *
 * // Store a value
 * set("user", { name: "John", age: 30 });
 *
 * // Retrieve a value
 * const user = get("user", { name: "Default", age: 0 });
 * console.log(user.name); // Output: John
 * ```
 *
 * @returns {object} An object containing two utility methods:
 * - `get<T>(key: string, defaultValue: T): T` - Retrieves the value associated with the key.
 * - `set<T>(key: string, value: T): void` - Stores the value associated with the key.
 */
const useLocalStorage = () => {
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

  // Return the utility methods
  return { get, set };
};

export default useLocalStorage;
