<template>
  <div class="order-row d-flex f-row f-align-items-center"
       :id="order.order_id" @click="$emit('onDetail', order.order_id)">
    <i :class="[`icon-${order.status}`, 'status-icon']" />
    <div class="data d-flex f-row f-space-around f-align-items-center">
      <div>
        <div class="data-set d-flex f-row f-align-items-center">
          <i class="icon-name icon-data" />
          <div class="col">{{ order.first_name }} {{ order.last_name }}</div>
        </div>
        <div class="data-set d-flex f-row f-align-items-center">
          <i class="icon-phone icon-data" />
          <div class="col">{{ order.phone }}</div>
        </div>
      </div>
      <div>
        <div class="data-set d-flex f-row f-align-items-center">
          <i class="icon-date icon-data" />
          <div class="col">{{ order.date }}</div>
        </div>
        <div class="data-set d-flex f-row f-align-items-center">
          <i class="icon-address icon-data" />
          <div class="col">{{ order.address }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'row-order-md',
  props: ['order']
};
</script>

<style lang="postcss" scoped>
@import '../../../../styles/base.scss';
@import '../../../../styles/flex.scss';
.order-row {
  border: solid 1px #dedede;
  height: 100px;
  margin: 0.8rem;
  border-radius: 5px;

  .status-icon {
    margin-left: 2rem;
    width: 20%;
    height: 70%;
  }
  .data {
    width: 80%;
    .data-set {
      margin-bottom: 0.4rem;
      .icon-data {
        width: 1rem;
        height: 1rem;
      }
      .col {
        margin-left: 0.4rem;
      }
    }
  }
}
</style>
