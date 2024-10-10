///  <reference types = "cypress"/>

describe('searchbox', function (){
    // SEARCHBOX HASIL TIDAK ADA
    // before(() => {
    //     cy.visit('http://zero.webappsecurity.com/index.html')
    // })
    // it('Should type into searchbox and submit', () => {
    //     cy.get('#searchTerm').type('some text {enter}')
    // });
    // it('Should show search result page', () => {
    //     cy.visit('http://zero.webappsecurity.com/search.html?searchTerm=some+text')
    //     cy.get('h2').should('contain.text', 'Search Results:')
    // });

    before(() => {
        //  Mengunjungi halaman utama
        cy.visit('http://zero.webappsecurity.com/index.html')
    });

    it('Should type into searchbox and submit', () => {
        // Mengetikkan keyword dan submit
        cy.get('#searchTerm').type('online {enter}')
    });

    it('Should show search result page', () => {
        cy.visit('http://zero.webappsecurity.com/search.html?searchTerm=online')
        //  Verifikasi elemen Search Results:
        cy.contains('h2', 'Search Results:').should('be.visible')

        // Memastikan link hasil pencarian ada dan visible
        cy.contains('Zero - Free Access to Online Banking').should('be.visible')
        cy.contains('Zero - Online Statements').should('be.visible')
    });
});