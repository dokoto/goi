import { getOrders } from '@/common/api';
import { EMPTY_ARRAY } from '@/common/constants';
import { RECEIVE_ORDERS, SET_ORDERS, SET_PAGE } from './types';

const state = {
  orders: EMPTY_ARRAY,
  filterOrders: EMPTY_ARRAY,
  page: 1,
  total: 0,
  ordersByPage: 10
};

const getters = {
  orderPager: curr =>
    curr.filterOrders.slice(
      (curr.page - 1) * curr.ordersByPage,
      ((curr.page - 1) * curr.ordersByPage) + curr.ordersByPage
    )
};

const actions = {
  async getOrders({ commit }) {
    const orders = await getOrders();
    commit(RECEIVE_ORDERS, orders);
  },
  filter({ commit }, query) {
    if (!query || query.length <= 0) {
      commit(SET_ORDERS, { orders: state.orders });
    }
    const orders = state.orders.filter(o => {
      const occurs = Object.keys(o).find(f => {
        if (typeof o[f] === 'string') {
          return o[f].toLowerCase().indexOf(query.toLowerCase()) !== -1;
        }
        return false;
      });
      return occurs && occurs.length > 0;
    });
    commit(SET_ORDERS, { orders });
  },
  nextPage({ commit }) {
    if (state.page + 1 < state.total) {
      commit(SET_PAGE, state.page + 1);
    }
  },
  prevPage({ commit }) {
    if (state.page - 1 > 0) {
      commit(SET_PAGE, state.page - 1);
    }
  }
};

const mutations = {
  [RECEIVE_ORDERS](currState, orders) {
    currState.orders = orders;
    currState.filterOrders = orders;
    currState.total = Math.ceil(orders.length / currState.ordersByPage);
    currState.page = 1;
  },
  [SET_ORDERS](currState, { orders, page = 1 }) {
    currState.filterOrders = orders;
    currState.total = Math.ceil(orders.length / currState.ordersByPage);
    currState.page = page;
  },
  [SET_PAGE](currState, page) {
    currState.page = page;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
