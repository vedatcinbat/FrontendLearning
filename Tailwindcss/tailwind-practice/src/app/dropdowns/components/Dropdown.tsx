"use client"
import React, { useState, useRef, useEffect } from "react"

interface DropdownProps {
    label: string;
    children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ label, children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false); // Close the dropdown if clicked outside
        }
      };

      useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);
    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                {label}
                <svg
                    className={`ml-2 -mr-1 h-5 w-5 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.667l3.71-3.435a.75.75 0 111.02 1.102l-4.24 3.918a.75.75 0 01-1.04 0L5.21 8.33a.75.75 0 01.02-1.12z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {isOpen == true && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                    <div className="py-1">{children}</div>
                </div>
            )}
        </div>
    );

}

export default Dropdown;