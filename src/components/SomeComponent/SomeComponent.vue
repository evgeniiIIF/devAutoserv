<script setup lang="ts">
// import { useCategoriesStore } from '@/store/categories';
import { useServicesAllStore } from '@/store/servicesAll';

// const { categoriesEffects, categoriesState } = useCategoriesStore();
const { servicesAllEffects, servicesAllState } = useServicesAllStore();

// await categoriesEffects.fetchCategoriesItems();
await servicesAllEffects.fetchServicesAll();
</script>

<template>
  <div>{{ servicesAllState.servicesAllItems }}</div>
</template>
