import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
const store = require("../../pages/store");
const storelogin = require("../../pages/storeLogin");
const Storeacc = require("../../pages/storeaccount");

When(`el usuario realiza hover {string}`, (opcion) => {
    store.getHeaderLinks().contains(opcion).trigger('mouseover')
})

When(`el usuario presiona {string} en el menu principal`, (opcion) => {
    store.getHeaderLinks().contains(opcion).click()
});

When(`el usuario realiza logout`, () => {
    store.getHeaderLinks().contains("Welcome back").trigger("mouseover");
    cy.contains("LogOff", { matchCase: false }).click();
});

When(`completa usuario y password {string}`, (num) => {
    const userData = Cypress.env().users[num - 1];
    cy.log(userData);

    //login empleando funcion dentro del page object
    storelogin.login(userData.user, userData.pass);

    //Login usando un comando en el support/commands.js
    //cy.login(userData.user, userData.pass)

    //Login empleando cada método del pageObject
    /*storelogin.getLoginInput().type(userData.user)
    storelogin.getPassInput().type(userData.pass)
    storeLogin.getloginButton().click()*/
});

Then(`se verifica que el título principal es {string}`, (title) => {
    Storeacc.getTtile().should("contain.text", title);
});