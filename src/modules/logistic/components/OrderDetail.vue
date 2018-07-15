<template>
  <form class="order-detail d-flex f-column relative">
    <div class="detail-container">
      <div class="w-100 d-flex f-row f-justify-end">
        <i class="icon-close" @click="$emit('closeDetail')"/>
      </div>
      <div class="field-col">
        <label for="first_name"
               class="input-label">State</label>
        <select class="input-select" name="status" @change="updateOrder">
          <option v-for="(state, index) in states"
                  :key="index"
                  :value="state"
                  :selected="state === order.status">{{ state }}</option>
        </select>
      </div>
      <div class="field-col">
        <label for="first_name"
               class="input-label">First Name</label>
        <input type="text"
               class="input-field"
               placeholder="First Name"
               id="first_name"
               @input="updateOrder"
               :value="order.first_name"
               name="first_name">
      </div>
      <div class="field-col">
        <label for="last_name"
               class="input-label">Last Name</label>
        <input type="text"
               class="input-field"
               placeholder="Last Name"
               id="last_name"
               @input="updateOrder"
               :value="order.last_name"
               name="last_name">
      </div>
      <div class="field-col">
        <label for="phone"
               class="input-label">Phone</label>
        <input type="tel"
               class="input-field"
               placeholder="Phone Number"
               id="phone"
               @input="updateOrder"
               :value="order.phone"
               name="phone">
      </div>
      <div class="field-col">
        <label for="date"
               class="input-label">Date</label>
        <input type="text"
               class="input-field"
               id="date"
               @input="updateOrder"
               :value="order.date"
               name="date">
      </div>
      <div class="field-col">
        <label for="comments"
               class="input-label">Comments</label>
        <textarea rows="4"
                  name="comments"
                  class="input-area"
                  @input="updateOrder"
                  :value="order.comments"
                  cols="50" />
      </div>
      <div class="field-col">
        <input type="button" class="input-button" value="Save" @click="$emit('saveChanges', orderModified)"/>
      </div>
    </div>
  </form>
</template>


<script>
export default {
  props: ['order'],
  data() {
    return {
      orderModified: {},
      states: ['shipped', 'error', 'delivered', 'pending']
    };
  },
  methods: {
    updateOrder(ev) {
      this.orderModified = { ...this.order, [ev.currentTarget.name]: ev.currentTarget.value };
    }
  }
};
</script>

<style lang="postcss" scoped>
@import '../../../styles/base.scss';
@import '../../../styles/flex.scss';
.order-detail {
  .detail-container {
    margin: 0.8rem;
    .field-col {
      margin-bottom: 0.8rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      .input-field {
        width: 100%;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        box-sizing: border-box;
        appearance: none;
        font-size: 2rem;
        padding: 0.2rem;
        border-radius: 5px;
        border: solid 1px $primary-color;
        background-color: $secundary-color;
      }
      .input-select {
        width: 100%;
        padding: 0.2rem;
        appearance: none;
        box-sizing: border-box;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-size: 2rem;
        border: solid 1px $primary-color;
        background-color: $secundary-color;
        border-radius: 5px;
      }
      .input-area {
        appearance: none;
        width: 100%;
        border-radius: 5px;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        border: solid 1px $primary-color;
        font-size: 1.5rem;
      }
      .input-button {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        appearance: none;
        margin-top: 2rem;
        border: solid 1px $primary-color;
        border-radius: 5px;
        padding: 0.3rem 0.5rem 0.3rem 0.5rem;
        font-size: 2rem;
        background-color: $secundary-color;
        outline: none;
      }
      .input-label {
        width: 100%;
        font-size: 2rem;
        font-weight: bold;
      }
    }
  }
}
</style>
