import { Routes, Route } from 'react-router-dom';
import { SearchBox } from './Components/SearchBox';
import { Hero } from './Components/Hero';
import { SearchResults } from './Components/SearchResults';
import { DetailProducts } from './Components/DetailProducts';

function App() {
  return (
    <div>
      <div>
        <SearchBox />
      </div>
      <div className='max-w-screen-xl m-auto px-5'>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/items' element={<SearchResults />} />
          <Route path='/item/:id' element={<DetailProducts />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
