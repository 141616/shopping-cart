/// <reference types="cypress" />

describe("基本测试", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("检测基本环境", () => {
    cy.get("#env").contains(process.env.NODE_ENV).should('be.ok');
  });
});
