import { getOrders } from '@/common/api';
import { EMPTY_ARRAY } from '@/common/constants';
import { RECEIVE_ORDERS, SET_ORDERS } from './types';

const state = {
  orders: EMPTY_ARRAY,
  filterOrders: EMPTY_ARRAY
};

const actions = {
  async getOrders({ commit }) {
    const orders = await getOrders();
    commit(RECEIVE_ORDERS, orders);
  },
  filter({ commit }, query) {
    if (!query || query.length <= 0) {
      commit(SET_ORDERS, state.orders);
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
    commit(SET_ORDERS, orders);
  }
};

const mutations = {
  [RECEIVE_ORDERS](currState, orders) {
    currState.orders = orders;
    currState.filterOrders = orders;
  },
  [SET_ORDERS](currState, orders) {
    currState.filterOrders = orders;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
