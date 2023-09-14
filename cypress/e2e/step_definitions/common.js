import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given(`que un usuario esta en la pagina de {string}`, (urlName) => {
    /*const url = Cypress.env("YVYTU_URL");
    cy.log(url);
    if (urlName == "Yvytu") {
        cy.visit("https://vientosdelaselva.com.ar/#reserva/");
    } else if (urlName == "Eden") {
        cy.visit("https://www.edenentradas.com.ar/")
    }*/
    const url = Cypress.env(`${urlName.toUpperCase()}_URL`);
    cy.visit(url);
});