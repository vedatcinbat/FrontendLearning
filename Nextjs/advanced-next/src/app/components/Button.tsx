"use client"

import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, size = 'medium', variant = 'primary' }) => {
  const sizeClasses = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
  };

  return (
    <button onClick={onClick} className={`rounded ${sizeClasses[size]} ${variantClasses[variant]} focus:outline-none focus:ring`}>
      {label}
    </button>
  );
};
