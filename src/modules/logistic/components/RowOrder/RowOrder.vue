<template>
  <component :order="order"
             :is="`row-order-${$mq}`" @onDetail="$emit('onDetail', order.order_id)"/>
</template>

<script>
import RowOrderSm from './RowOrderSm';
import RowOrderMd from './RowOrderMd';
import RowOrderLg from './RowOrderLg';

export default {
  props: ['order'],
  components: { RowOrderSm, RowOrderMd, RowOrderLg }
};
</script>
