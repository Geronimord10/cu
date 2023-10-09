import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
const EdenHome = require("../../pages/edenPage")
const edenEvent = require("../../pages/edenEvent")

When(`escribe {string} en el campo del buscador`, (palabraAbuscar) => {
    EdenHome.getSearchInput().type(palabraAbuscar)
});

When(`hace click en la sugerencia {string}`, (suggestionTxt) => {
    EdenHome.getSearchSuggestions().contains(suggestionTxt).click();
});

When(`presiona el boton del header {string}`, (btnName) => {
    EdenHome.getNavBarbtn().contains(btnName).click();
});

When(`presiona el boton ver de {string}`, (showName) => {
    cy.intercept("GET", "FUNC022211").as("getshow");
    if (isNaN(showName)) {
        EdenHome
            .getEventBlock()
            .contains(showName)
            .parent()
            .parent()
            .find("a")
            .last()
            .click();
    } else {
        EdenHome.getEventBlock().eq(showName - 1).parent().parent().find("a").last().click();
    }
    cy.wait("@getshow").then((respuesta) => {
        cy.writeFile("cypress/fixtures/intercept/show.json", respuesta);
    });
});

Then(`el precio que se visualiza tiene el formato correcto validado con la respuesta del intercept`, () => {
    cy.fixture("intercept/show.json").then((resp) => {
        const precios = resp.response.body.precios;

        EdenHome.getEventUbicacion.each((precioShow, inx) => {
            const precioUb = precios[inx]
            const precioShows = `${precioUb.PrecioEntrada} + ${precioUb.ServiceCharge}`

            cy.wrap(precioShow).should("contains.text", precioShows)
        });
    });
}
);

Then(`el precio que se visualiza tiene el formato correcto validado con el servicio`, () => {
    cy.request({
        method: "GET",
        url: "https://edenapi.edenentradas.com.ar/edenventarestapi/api/contenido/funcion/FUNC022211"
    }).then((resp) => {
        const precios = resp.body.precios;
        EdenHome.getEventPrice().each((precioShow, inx) => {
            const precioUb = precios[inx];
            const precioShows = `${precioUb.PrecioEntrada} + ${precioUb.ServiceCharge}`
            EdenHome.getEventUbicacion().eq(inx).should("contain.text", precioUb.Nombre)
            cy.wrap(precioShow).should("contains.text", precioShows)
        });
    });
}
);

Then(`el precio que se visualiza tiene el formato correcto`, () => {
    const precio = new RegExp(
        "\\$ [0-9]{1,3}.[0-9]{3},[0-9]{2} \\+ \\$ [0-9]{1,3}.[0-9]{3},[0-9]{2}"
    );
    EdenHome.getEventPrice().contains(precio);
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




