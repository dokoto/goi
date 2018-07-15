<template>
  <div class="order-row d-flex f-row f-align-items-end" :id="order.order_id"
       :style="{ backgroundImage: `url('/static/${order.status}.jpg')` }">
    <div class="icon-container d-flex f-row f-justify-center f-align-items-center">
      <i :class="[`icon-${order.status}`, 'status-icon']" />
    </div>
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
  props: ['order']
};
</script>

<style lang="postcss" scoped>
@import '../../../styles/base.scss';
@import '../../../styles/flex.scss';

.order-row {
  position: relative;
  border: solid 1px #dedede;
  height: 80%;
  margin: 0.8rem;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 5px;
}
.icon-container {
  border-radius: 50%;
  background-color: rgba(239, 239, 239, 0.67);
  position: absolute;
  left: 0.5rem;
  top: 0.5rem;
  left: 0.5rem;
  top: 0.5rem;
  width: 5rem;
  height: 5rem;
}
.status-icon {
  width: 100%;
  height: 100%;
  margin: 0.8rem;
}
.date,
.address,
.status-photo,
.comments {
  display: initial;
}
.icon-data {
  width: 1rem;
  height: 1rem;
}
.data-set {
  margin-bottom: 0.4rem;
}
.col {
  margin-left: 0.4rem;
}
.bg-lg {
  background-image: url('');
}
.data {
  background-color: rgba(239, 239, 239, 0.67);
  padding-top: 0.5rem;
  width: 100%;
}
</style>
