import { useState, useEffect } from "react";
/**
 * useDebounce Hook
 *
 * A custom React hook that delays updating the value until after a specified delay.
 *
 * This is useful for scenarios where you want to wait for a certain amount of time
 * after the value stops changing before taking an action, such as for search inputs
 * or API calls to reduce the frequency of requests.
 *
 * @template T - The type of the value being debounced.
 *
 * @param {T} value - The input value to debounce.
 * @param {number} delay - The delay (in milliseconds) before updating the debounced value.
 *
 * @returns {T} - The debounced value, which updates only after the specified delay.
 *
 * Example Usage:
 * ```tsx
 * const [searchTerm, setSearchTerm] = useState("");
 * const debouncedSearchTerm = useDebounce(searchTerm, 500);
 *
 * useEffect(() => {
 *   if (debouncedSearchTerm) {
 *     // Trigger API call or handle debounced value
 *   }
 * }, [debouncedSearchTerm]);
 * ```
 */
const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
