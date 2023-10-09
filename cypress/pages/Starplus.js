class StarPage {

  getsecc() {
    return cy.get(`[data-testid="bundle_cta_hero"]`)
  }

  getTittle() {
    return cy.get(`h3`)
  }
}

module.exports = new StarPage();