<template>
  <div>
    <h3>Chart.js still not fully integrated with Vue 3</h3>
    <BarChart></BarChart>
  </div>
</template>

<script>
// Chart.js component is not fully functional with Vue 3
import BarChart from '@/components/chart/BarChart.vue';
export default {
  name: 'Chart',
  components: {
    BarChart
  }
};
</script>

<style lang="scss" scoped></style>
