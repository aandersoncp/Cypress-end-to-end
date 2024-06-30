// sauce.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


describe('suite of test', function() {
    beforeEach(function(){
        cy.visit('https://www.saucedemo.com/')
    })
    it('visit site', function(){
        cy.title().should('be.equal', 'Swag Labs')
    })
    it('successfull login', function(){
        cy.Login('standard_user', 'secret_sauce')
        cy.url().should('be.equal', 'https://www.saucedemo.com/inventory.html')
    }),
    it('unsuccessful login: locked out user', function() {
        cy.Login('locked_out_user', 'secret_sauce')
        cy.get('[data-test="error"]').contains('Epic sadface: Sorry, this user has been locked out.')
    })

})