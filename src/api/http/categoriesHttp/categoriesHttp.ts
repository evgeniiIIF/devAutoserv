import { useAppFetch } from '@/composables/useAppFetch';

const BASE_PATH = '/categories';

const fetchCategories = async () => {
  const response = await useAppFetch(`${BASE_PATH}`, {
    method: 'GET',
  });

  return response;
};

export const categoriesHttp = {
  fetchCategories,
};
