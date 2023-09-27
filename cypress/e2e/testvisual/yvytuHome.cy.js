/// <reference types="cypress" />

it("Visual Tetsing de Yvytu usando Snapshoot", () => {
    cy.compareSnapshot("home-page");
});
