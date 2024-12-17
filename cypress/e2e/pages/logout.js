export class Logout{
    logout(){
        cy.get('#leftPanel > ul > :nth-child(8) > a').click()
    }
}