<template>
  <div class="card-info__row card-info__row-item">
    <span>{{ block.blockId }}</span>
    <span>{{ block.baker }}</span>
    <span>{{ block.сreated }}</span>
    <span>{{ block.number_of_operations }}</span>
    <span>{{ block.volume }}</span>
    <span>{{ block.fees }}</span>
  </div>
</template>

<script>
export default {
  props: {
    block: Object,
  },
};
</script>
