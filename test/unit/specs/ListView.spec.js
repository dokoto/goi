import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';
import ListView from '@/modules/logistic/views/ListView.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Given a Order ListView', () => {
  const state = {};
  let store;
  const logistic = {
    namespaced: true,
    state: {
      orders: [],
      filterOrders: [],
      page: 1,
      total: 0,
      ordersByPage: 10
    },
    getters: {
      orderPager: jest.fn()
    },
    actions: {
      getOrders: jest.fn()
    }
  };

  beforeEach(() => {
    store = new Vuex.Store({
      state,
      modules: {
        logistic
      }
    });
  });

  it('Should render basic html structure', () => {
    const wrapper = mount(ListView, { store, localVue });
    expect(wrapper.findAll('.orders-list-container').exists()).toBe(true);
    expect(wrapper.findAll('.orders-list-container .filter').exists()).toBe(
      true
    );
    expect(wrapper.findAll('.orders-list-container .pager').exists()).toBe(
      true
    );
    expect(
      wrapper.findAll('.orders-list-container .orders-list').exists()
    ).toBe(true);
  });
});
