<template>
  <div class="order-row d-flex f-row f-align-items-center" :id="order.order_id">
    <i :class="[`icon-${order.status}`, 'status-icon']" />
    <div class="data d-flex f-column f-align-items-center">
      <div class="data-set d-flex f-row f-align-items-center">
        <i class="icon-name icon-sm" />
        <div class="col name">{{ order.first_name }}  {{ order.last_name }}</div>
      </div>
      <div class="data-set d-flex f-row f-align-items-center">
        <i class="icon-phone icon-sm" />
        <div class="col phone">{{ order.phone }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['order']
};
</script>

<style lang="postcss" scoped>
@import '../../../styles/base.scss';
@import '../../../styles/flex.scss';
.order-row {
  border: solid 1px #dedede;
  height: 100px;
  margin: 0.8rem;
}

.date,
.address,
.comments,
.status-photo {
  display: none;
}
.data {
  width: 80%;
}
.status-icon {
  margin-left: 2rem;
  width: 20%;
  height: 50%;
}
.icon-sm {
  width: 1rem;
  height: 1rem;
}
.data-set {
  margin-bottom: 0.4rem;
}
.col {
  margin-left: 0.4rem;
}
</style>
