import { useAppFetch } from '@/composables/useAppFetch';

const BASE_PATH = '/services_all';

const fetchServicesAll = async () => {
  const response = await useAppFetch(`${BASE_PATH}`, {
    method: 'GET',
  });

  return response;
};

export const servicesAllHttp = {
  fetchServicesAll,
};
