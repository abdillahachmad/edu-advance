///  <reference types = "cypress"/>

describe('Navbar test', function () { 
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });

    it('Should display online banking content', () => {
        cy.contains('Online Banking').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
        
        //add assertion
        cy.contains('p', 'Pay bills easily').should('be.visible')
    });

    it('Should display feedback content', () => {
        cy.visit('http://zero.webappsecurity.com/feedback.html')
        cy.contains('Feedback').click()
        cy.url().should('include', 'feedback.html')

        // Additional assertions
        cy.get('form').should('be.visible')
        cy.get('input[name="name"]').should('exist')
        cy.get('input[name="email"]').should('have.attr', 'placeholder', 'Your email address')
        cy.get('textarea').should('have.attr', 'name', 'comment')
    });

    it('Should display homepage content', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
    });
 })