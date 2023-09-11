import { useState } from "react";

export function useDropdownState(initialState = false) {
  const [dropdownOpen, setDropdownOpen] = useState(initialState);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return [dropdownOpen, toggleDropdown] as const;
}
