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

    login(user, pass) {
        this.getLoginInput().type(user);
        this.getPassInput().type(pass);
        this.getLoginBtn().click();
    }
}

module.exports = new StorePagelogin();