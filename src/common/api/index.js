import { orders } from './paths';

export function getOrders() {
  return fetch(orders).then(resp => resp.json());
}

export function saveOrder(order) {
  return fetch(`${orders}${order.order_id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(order)
  })
    .then(response => response.json())
    .catch(error => error);
}
