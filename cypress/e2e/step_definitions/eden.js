import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
const EdenHome = require("../../pages/edenPage")
const edenEvent = require("../../pages/edenEvent")

When(`escribe {string} en el campo del buscador`, (palabraAbuscar) => {
    EdenHome.getSearchInput().type(palabraAbuscar)
});

When(`hace click en la sugerencia {string}`, (suggestionTxt) => {
    EdenHome.getSearchSuggestions().contains(suggestionTxt).click();
});

Then(`se verifica que el titulo es {string}`, (eventTitle) => {
    edenEvent.getEventTitle().should("contain.text", eventTitle);
});

Then(`la fecha es {string} de {string} a las {string} Hs`, (day, month, hs) => {
    edenEvent.getEventDay().should("contain.text", day);
    edenEvent.getEventMonth().should("contain.text", month);
    edenEvent.getEventHour().should("contain.text", hs);
});

Then(`se verifican los siguientes datos del evento`, (table) => {
    table = table.rowsHash();
    edenEvent.getEventTitle().should("contain.text", table["titulo"]);
    edenEvent.getEventDay().should("contain.text", table["dia"]);
    edenEvent.getEventMonth().should("contain.text", table["mes"]);
    edenEvent.getEventHour().should("contain.text", table["hora"]);
});




