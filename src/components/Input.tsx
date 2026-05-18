import React from 'react';
import type { IInputPropinaProps } from '../types/Input';

export const Input: React.FC<IInputPropinaProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder = "0",
  min = 0,
  max
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={name} className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <input
        type="number"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        max={max}
        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 
        text-gray-900 dark:text-white shadow-sm "
      />
    </div>
  );
};