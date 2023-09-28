import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import storeLogin from "../../pages/storeLogin";
const store = require("../../pages/store");
const storelogin = require("../../pages/storeLogin");
const Storeacc = require("../../pages/storeaccount");

When(`el usuario presiona {string} en el menu principal`, (opcion) => {
    store.getHeaderLinks().contains(opcion).click()
});

When(`completa usuario y password {string}`, (num) => {
    const userData = Cypress.env().users[num - 1];
    storelogin.getLoginInput().type(userData.user)
    storelogin.getPassInput().type(userData.pass)
    storeLogin.getloginButton().click()
});

Then(`se verifica que el titulo principal es {string}`, (title) => {
    Storeacc.getTtile().should("contain.text", title);
});