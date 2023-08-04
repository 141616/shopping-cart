/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:3000/')
  })

  it('默认展示20条数据', () => {
    cy.get('.MuiGrid-item').should('have.length', 20)
  })

  it('价格升序', () => {

    cy.get('#asc-button').click();

    cy.wait(3000);

    cy.get('.price-main').eq(0).invoke('text').then(text1 => {
      cy.get('.price-main').eq(1).invoke('text').then(text2 => {
        const value1 = parseInt(text1.trim());
        const value2 = parseInt(text2.trim());
    
        // 比较价格大小
        expect(value1).to.be.lessThan(value2);
      });
    });
  })

  it('过滤尺寸', () => {
    cy.wait(1000);
    cy.get('.PrivateSwitchBase-input').eq(0).click();
    cy.wait(1000);

    cy.get('.MuiGrid-item').should('have.length', 1)
    cy.get('.sizes-container').eq(0).contains("XS").should('exist');
  })
})
