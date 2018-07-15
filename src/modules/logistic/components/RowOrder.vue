<template>
  <row-order-sm :order="order" v-if="$mq === 'sm'" />
  <row-order-md :order="order" v-else-if="$mq === 'md'" />
  <row-order-lg :order="order" v-else-if="$mq === 'lg'" />
</template>

<script>
import RowOrderSm from './RowOrderSm';
import RowOrderMd from './RowOrderMd';
import RowOrderLg from './RowOrderLg';

export default {
  props: ['order'],
  components: { RowOrderSm, RowOrderMd, RowOrderLg },
};
</script>
