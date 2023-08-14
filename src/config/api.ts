import { useQuery } from '@tanstack/react-query';

const URL = 'https://api.mercadolibre.com/sites/MLA/search?q=';
const LIMIT = 10;
export const getProducts = (query: string) => {
  try {
    return fetch(`${URL}${query}&limit=${LIMIT}`).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
};

export const useGetProducts = (query: string | null) => {
  const { data = [] } = useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(query ?? ''),
  });

  return data ? data.results : [];
};

export const apiItem = {
  item: async (id: string | undefined) => {
    if (!id) return;
    const res1 = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const item = await res1.json();
    const res2 = await fetch(
      `https://api.mercadolibre.com/items/${id}/description`
    );
    const comment = await res2.json();
    return { item, comment };
  },
};

interface Item {
  item: {
    title: string;
    price: number;
    pictures: { url: string }[];
  };
  comment: {
    plain_text: string;
  };
}

interface Data {
  data: Item;
  isFetching: boolean;
  isLoading: boolean;
}

export const useItem = (id: string) => {
  const {
    data = [],
    isFetching,
    isLoading,
  } = useQuery({
    queryKey: ['Item'],
    queryFn: () => apiItem.item(id),
    refetchOnWindowFocus: false,
  });
  return { data, isFetching, isLoading } as Data;
};
