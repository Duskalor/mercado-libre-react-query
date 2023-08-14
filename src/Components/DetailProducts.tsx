import { useParams } from 'react-router-dom';
import { useItem } from '../config/api';
export const DetailProducts = () => {
  const { id = '' } = useParams();
  const {
    data: { item, comment },
    isFetching,
  } = useItem(id);

  return (
    <div className='my-10 bg-white text-black p-2'>
      {isFetching && <h2>CARGANDO .... </h2>}
      {!isFetching && (
        <div className='flex flex-col gap-10'>
          <div className='flex justify-between p-3 flex-col sm:flex-row '>
            <img src={item.pictures[0].url} alt={item.title} />
            <div className='flex flex-col gap-3'>
              <p className='text-3xl font-bold '>
                {new Intl.NumberFormat('es-PE', {
                  currency: 'PEN',
                  style: 'currency',
                }).format(item.price / 100)}
              </p>
              <p>{item.title}</p>
              <button className='bg-blue-500 text-white p-2 w-full'>
                COMPRAR
              </button>
            </div>
          </div>

          <div>
            <h3 className='text-3xl py-2'>DESCRIPCIÓN</h3>
            <p>{comment.plain_text}</p>
          </div>
        </div>
      )}
    </div>
  );
};
