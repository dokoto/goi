<template>
  <section class="orders-list-container d-flex f-column h-100">
    <input type="text"
           placeholder="Free text search"
           v-model.trim="qs"
           class="filter" />
    <div class="pager d-flex f-row f-justify-center f-align-items-center">
      <i class="icon-prev icon-nav f-grow-1" @click="prevPage" />
      {{ page }} / {{ total }}
      <i class="icon-next icon-nav f-grow-1"  @click="nextPage" />
    </div>
    <transition-group class="orders-list"
                      tag="div"
                      enter-active-class="animated fadeIn"
                      leave-active-class="animated fadeOut">
      <row-order v-for="order in orderPager"
                 :key="order.order_id"
                 :order="order" />
    </transition-group>
  </section>
</template>

<script>
import debounce from 'lodash/debounce';
import { mapState, mapActions, mapGetters } from 'vuex';
import { EMPTY_STRING } from '@/common/constants';
import RowOrder from '../components/RowOrder';

export default {
  components: { RowOrder },
  data() {
    return {
      qs: EMPTY_STRING
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
    ...mapActions('logistic', ['nextPage', 'prevPage'])
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
  border: solid 1px #dedede;
  border-radius: 5px;
  background-color: white;
}
.pager {
  font-size: 2rem;
}
.icon-nav {
  width: 2.5rem;
  height: 2.5rem;
}
</style>
