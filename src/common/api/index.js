import { orders } from './paths';

export function getOrders() {
  return fetch(orders).then(resp => resp.json());
}
