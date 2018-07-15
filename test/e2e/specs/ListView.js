/*
 * PARA DEPURAR:
 * - Se añade ".debug()" al final de algun cy.[].
 * - Ejecutamos $> npm run e2e-cli
 * - F12
 * - Ejecutamos el spec que deseamos depurar
 * - Y nos parara en el codigo de cypress, buscamos con CTRL+P
 *   nuestro fichero test/e2e/speces/login.js
 * - Ponemos un break-point y "pa lante"
 */

const url = '/';
const WAIT_TIME = 400;
describe('ListView test', () => {
  const resolutions = [
    {
      tag: 'MacBook-15',
      screen: { w: 1440, h: 900 }
    },
    {
      tag: 'iPad',
      screen: { w: 1024, h: 768 },
      item: { w: 400, h: 200 }
    }
  ].forEach(resolution => {
    const preHeader = `[${resolution.tag}][${resolution.screen.w}x${
      resolution.screen.h
    }]`;

    context(preHeader, function() {
      beforeEach(function() {
        cy.visit(`${url}`);
        cy.viewport(resolution.screen.w, resolution.screen.h);
      });

      it('Give Order listView, its must be paginated to 10 elements', () => {
        cy.get('.orders-list .order-row').should('have.length', 10);
      });

      it('Should page change to 2 when next botton is clicked', () => {
        cy.get('.icon-next').click();
        cy.get('.pager span').contains('2/20');
      });

      it('Should show order detail when order is clicked', () => {
        cy.get('.order-row:first').click();
        cy.get('label[for="first_name"]').contains('State');
      });
    });
  });
});
