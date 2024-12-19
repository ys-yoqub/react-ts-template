import { useState } from "react";

function useModal(defaultValue: boolean = false) {
  const [isOpen, setIsOpen] = useState<boolean>(defaultValue);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const reverse = () => setIsOpen((prev) => !prev);

  return { status: isOpen, open, close, reverse };
}

export default useModal;
