<template>
  <div class="card-info">
    <h2 class="card-info__title">Tezos blocks</h2>
    <div class="card-info__wrapper">
      <div class="card-info__row card-info__row-header">
        <span>Block ID</span>
        <span>Baker</span>
        <span>Created</span>
        <span># of operations</span>
        <span>Volume</span>
        <span>Fees</span>
      </div>

      <CardInfoRowItem></CardInfoRowItem>
    </div>
  </div>
</template>

<script>
import CardInfoRowItem from "./CardInfoRowItem";
export default {
  components: {
    CardInfoRowItem,
  },
};
</script>

<style scoped>
.card-info {
  padding: 16px 0 26px;
  width: 740px;
  border: 1px solid #c8c5ef;
  box-shadow: 0px 10px 40px rgba(36, 21, 220, 0.1);
  border-radius: 4px;
}
.card-info__title {
  margin: 0;
  padding-left: 30px;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
}
.card-info__row {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 20px 30px 22px;
  border-bottom: 1px solid #ecf4ff;
}
.card-info__row {
  font-size: 16px;
  line-height: 19px;
  color: #122232;
}
</style>>
