import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(`que un usuario esta en la pagina de {string}`, (urlName) => {
    const url = Cypress.env(`${urlName.toUpperCase()}_URL`);
    cy.viewport("macbook-16");
    cy.visit(url);
});

Then(`se compara {string} con la imagen base`, (imgName) => {
    cy.compareSnapshot(imgName)
});

Then(`se verifica que el elemento {string} posee los atributos`, (locator, tabla) => {
    tabla = tabla.rows();

    tabla.forEach((element, $index) => {
        const propertyCSS = element[0]
        const propertyCSSvalue = element[1]
        const txtlog = element[2]
        //y.get(locator).should("have.css", propertyCSS, propertyCSSvalue)
        cy.get(locator).should(($ele) => {
            const cssCheck = $ele.css(propertyCSS)
            expect(cssCheck).to.contain(propertyCSSvalue)
        })
        cy.log(`se verifica ${txtlog}`)

    });
}
);

When(`cuando el usuario presiona la flecha de {string} en el navegador`,
    (action) => {
        cy.go(action); //back => -1, foward => 1,
    }
);

Then(`se verifica que la url es {string}`, (url) => {
    cy.url().should("eq", url);
});
