import { ref } from 'vue';
import { defineStore } from 'pinia';

import { categoriesHttp } from '@/api/http';
import type { CategoriesItem, CategoriesState } from './categories.types';

const DEFAULT_STATE: CategoriesState = {
  categoriesItems: [],
};

export const categoriesStore = defineStore('categoriesStore', () => {
  const state = ref(DEFAULT_STATE);

  const setCategoriesItems = (items: CategoriesItem[]) => {
    state.value.categoriesItems = items;
  };

  const fetchCategoriesItems = async () => {
    try {
      const { data } = await categoriesHttp.fetchCategories();

      setCategoriesItems(data.value as CategoriesItem[]);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    state,
    actions: {},
    effects: {
      fetchCategoriesItems,
    },
  };
});
