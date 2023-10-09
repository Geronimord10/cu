import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
const Star = require("../../pages/Starplus")

When(`clickea la opcion {string}`, (subtittle) => {
    Star.getsecc().should("contain.text", subtittle).click();
});

Then(`verifica el titulo {string} para la suscripcion`, (title) => {
    Star.getTittle().should("contain.text", title)
})