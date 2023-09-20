import React from 'react';

export default function Title({
  text, description 
} : {
  text: string,
  description: string
}) {
  return (
    <div className="flex flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100">{text}</h1>
      <div className="mt-2 flex items-center text-sm text-gray-500">
        {description}
      </div>
    </div>
  )
};
 
