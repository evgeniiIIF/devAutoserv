import { storeToRefs } from 'pinia';
import { categoriesStore } from './categories';

export const useCategoriesStore = () => {
  const { actions, effects } = categoriesStore();
  const { state } = storeToRefs(categoriesStore());

  return {
    categoriesState: state,
    categoriesActions: actions,
    categoriesEffects: effects,
  };
};
