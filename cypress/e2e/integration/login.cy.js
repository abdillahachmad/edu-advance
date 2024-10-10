///  <reference types = "cypress"/>

describe('Login/Logout test', () => { 
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
    });

    it('Should try to login with invalid data', () => {
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.get('input[name="submit"]').click()
    });

    it('Should display error message', () => {
        cy.get('.alert-error').should('be.visible').and('contain.text', ' Login and/or password are wrong.')
    });

    it('Should login to application with valid data', () => {
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user_login').clear()
            cy.get('#user_login').type(username)
            cy.get('#user_password').clear()
            cy.get('#user_password').type(password)
            cy.get('input[name="submit"]').click()

            cy.get('h2').should('contain.text', 'Cash Accounts')
        })
    });

    it('Should logout from the application', () => {
        cy.contains('username').click()
        cy.get('#logout_link').click()
        //TUGAS TEST CASE LOGUT BELUM ADA ASSERTION
        // Assertion: Memastikan URL berubah ke halaman login atau homepage
        cy.url().should('include', 'index.html')
         // Assertion: Memastikan tombol "Sign in" kembali terlihat, yang artinya pengguna sudah logout
        cy.get('#signin_button').should('be.visible')
         // Assertion tambahan: Memastikan elemen yang hanya ada saat login sudah tidak terlihat
        cy.get('#logout_link').should('not.exist')





        //cy.get('strong').should('contain.text', 'Home')
    });
 })