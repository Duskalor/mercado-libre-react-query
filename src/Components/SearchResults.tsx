import { useLocation, useNavigate } from 'react-router-dom';
import { useGetProducts } from '../config/api';
interface Product {
  id: string;
  price: number;
  title: string;
  thumbnail: string;
  currency_id: string;
  seller: {
    nickname: string;
  };
}
export const SearchResults = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(search);
  const products = useGetProducts(query.get('search'));
  return (
    <div className='my-10'>
      <div className='bg-white text-black py-2 rounded-sm flex flex-col gap-10'>
        {products &&
          products.map(({ id, thumbnail, title, price, seller }: Product) => {
            return (
              <div
                key={id}
                className='flex px-5 gap-5 sm:flex-row flex-col'
                onClick={() => navigate(`/item/${id}`)}
              >
                <img src={thumbnail} alt={title} />
                <div className='sm:text-left text-center'>
                  <p className='font-bold text-xl'>
                    {new Intl.NumberFormat('es-PE', {
                      currency: 'PEN',
                      style: 'currency',
                    }).format(price / 100)}
                  </p>
                  <p>{title}</p>
                </div>
                <p className='sm:w-[20%]  sm:ml-auto ml-0 text-center '>
                  {seller.nickname}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
