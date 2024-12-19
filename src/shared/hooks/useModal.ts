import { useState } from "react";
/**
 * useModal Hook
 *
 * A custom hook to manage the open/close state of a modal or similar components.
 *
 * This hook simplifies the management of boolean state, providing utility functions
 * to open, close, and toggle the state.
 *
 * Default Behavior:
 * - By default, the modal is closed (`false`).
 * - You can set an initial state by passing a `defaultValue` parameter.
 *
 * Example Usage:
 * ```tsx
 * const { status, open, close, reverse } = useModal();
 *
 * // Open the modal
 * open();
 *
 * // Check if the modal is open
 * console.log(status); // true
 *
 * // Close the modal
 * close();
 *
 * // Toggle the modal state
 * reverse();
 * ```
 *
 * @param {boolean} [defaultValue=false] - The initial state of the modal (open or closed).
 * @returns {object} An object with the following properties:
 * - `status: boolean` - The current state of the modal.
 * - `open: () => void` - A function to set the state to `true` (open).
 * - `close: () => void` - A function to set the state to `false` (close).
 * - `reverse: () => void` - A function to toggle the state.
 */
function useModal(defaultValue: boolean = false): object {
  /**
   * State to track whether the modal is open or closed.
   *
   * @type {boolean}
   */
  const [isOpen, setIsOpen] = useState<boolean>(defaultValue);

  /**
   * Opens the modal by setting the state to `true`.
   *
   * @returns {void}
   */
  const open = (): void => setIsOpen(true);

  /**
   * Closes the modal by setting the state to `false`.
   *
   * @returns {void}
   */
  const close = (): void => setIsOpen(false);

  /**
   * Toggles the modal state between `true` (open) and `false` (closed).
   *
   * @returns {void}
   */
  const reverse = (): void => setIsOpen((prev: boolean) => !prev);

  /**
   * Returns the current state and utility functions.
   */
  return { status: isOpen, open, close, reverse };
}

export default useModal;
