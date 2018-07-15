<template>
  <section class="orders-list-container d-flex f-column h-100 relative"
           data-test="list-view">
    <input type="text"
           placeholder="Free text search"
           v-model.trim="qs"
           class="filter" />
    <div class="pager d-flex f-row f-justify-center f-align-items-center">
      <i class="icon-prev icon-nav f-grow-1"
         data-test="prev"
         @click="prevPage" />
         <span>{{ page }}/{{ total }}</span>
      <i class="icon-next icon-nav f-grow-1"
         data-test="next"
         @click="nextPage" />
    </div>
    <transition-group class="orders-list"
                      tag="div"
                      enter-active-class="animated fadeIn"
                      leave-active-class="animated fadeOut">
      <row-order v-for="order in orderPager"
                 data-test="orders"
                 :key="order.order_id"
                 :order="order"
                 @onDetail="showDetail" />
    </transition-group>
    <transition enter-active-class="animated zoomIn"
                leave-active-class="animated zoomOutLeft">
      <order-detail v-show="showOrder"
                    :order="orderId"
                    @closeDetail="showOrder = false"
                    @saveChanges="saveChanges"
                    class="modal"></order-detail>
    </transition>
  </section>
</template>

<script>
import debounce from 'lodash/debounce';
import { mapState, mapActions, mapGetters } from 'vuex';
import { EMPTY_STRING } from '@/common/constants';
import RowOrder from '../components/RowOrder/RowOrder';
import OrderDetail from '../components/OrderDetail';

export default {
  components: { RowOrder, OrderDetail },
  data() {
    return {
      qs: EMPTY_STRING,
      showOrder: false,
      orderId: 0
    };
  },
  computed: {
    ...mapState('logistic', ['page', 'total']),
    ...mapGetters('logistic', ['orderPager'])
  },
  mounted() {
    this.$store.dispatch('logistic/getOrders');
  },
  watch: {
    qs: debounce(function(val) {
      this.$store.dispatch('logistic/filter', val);
    }, 500)
  },
  methods: {
    ...mapActions('logistic', ['nextPage', 'prevPage', 'saveChanges']),
    showDetail(id) {
      this.orderId = this.orderPager.find(o => o.order_id == id);
      this.showOrder = true;
    }
  }
};
</script>

<style lang="postcss" scoped>
@import 'animate.css/animate.min.css';
@import '../../../styles/base.scss';
@import '../../../styles/flex.scss';
.orders-list {
  overflow-y: auto;
  height: 100%;
}
.filter {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  appearance: none;
  font-size: 2rem;
  margin: 0.8rem;
  padding: 0.2rem;
  border-radius: 5px;
  border: solid 1px $primary-color;
  background-color: $secundary-color;
}
.pager {
  font-size: 2rem;
  .icon-nav {
    width: 2.5rem;
    height: 2.5rem;
  }
}
</style>
