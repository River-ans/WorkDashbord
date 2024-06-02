'use client';
import { useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState('');

  const handleKeyDown = (e: { key: string }) => {
    if (e.key === 'Enter') {
      window.open(`https://www.google.com/search?q=${query}`, '_blank');
    }
  };

  return (
    <main className='flex flex-col'>
      RIVER WORK DASHBORD
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </main>
  );
}
