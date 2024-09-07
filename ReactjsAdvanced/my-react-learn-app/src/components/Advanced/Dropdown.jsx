import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";

const Dropdown = ({isOpen, toggleDropdown}) => {
    const dropdownRef = useRef(null);

    return isOpen
    ? ReactDOM.createPortal(
        <div className="dropdown-menu" ref={dropdownRef}>
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </div>,
        document.getElementById("dropdown-root")
      )
    : null;
}

export default Dropdown;