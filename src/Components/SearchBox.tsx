import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const SearchBox = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const handleSubmitSearch = () => navigate(`/items?search=${search}`);
  return (
    <div className='bg-yellow-300 py-4'>
      <div className='max-w-screen-xl m-auto flex sm:flex-row flex-col px-5 items-center'>
        <span
          className='pr-6 text-black flex items-center justify-center py-1 sm:py-0'
          onClick={() => {
            navigate('/');
            setSearch('');
          }}
        >
          Mercadito
        </span>
        <div className='flex w-full '>
          <input
            value={search}
            type='text'
            className=' flex-1 h-8 outline-none px-2'
            onKeyDown={(e) => e.key === 'Enter' && handleSubmitSearch()}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleSubmitSearch} className='bg-black h-8 w-8'>
            🔍
          </button>
        </div>
      </div>
    </div>
  );
};
