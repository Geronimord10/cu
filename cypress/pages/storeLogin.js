class StorePagelogin {
    getLoginInput() {
        return cy.get("#loginfrm_loginname")
    }

    getPassInput() {
        return cy.get("#loginfrm_password")
    }

    getloginButton() {
        return cy.get('[title="Login"]')
    }
}

module.exports = new StorePagelogin();