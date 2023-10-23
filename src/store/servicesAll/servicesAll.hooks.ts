import { storeToRefs } from 'pinia';
import { servicesAllStore } from './servicesAll';

export const useServicesAllStore = () => {
  const { actions, effects } = servicesAllStore();
  const { state } = storeToRefs(servicesAllStore());

  return {
    servicesAllState: state,
    servicesAllActions: actions,
    servicesAllEffects: effects,
  };
};
