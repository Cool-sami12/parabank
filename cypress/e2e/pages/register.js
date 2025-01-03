export class RegistrationPage{
    redirect (){
        cy.get('#loginPanel > :nth-child(3) > a').click()
    }
    titlecheck(){
        cy.get('.title').should('be.visible');
        cy.get('#rightPanel > p').contains('If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information.')
        cy.get('#rightPanel > p').should('be.visible');
    }
    inputFirstName(fn){
        cy.get(`input[name='customer.firstName']`).type(fn)
    }
    inputLastName(ln){
        cy.get(`input[name='customer.lastName']`).type(ln)

    }
    inputAddress(Addrs){
        cy.get(`input[name='customer.address.street']`).type(Addrs)
    }
    inputCity(city){
        cy.get(`input[name='customer.address.city']`).type(city)
    }
    inputState(state){
        cy.get(`input[name='customer.address.state']`).type(state)
    }
    inputZipCode(zc){
        cy.get(`input[name='customer.address.zipCode']`).type(zc)
    }
    inputPhone(ph){
        cy.get(`input[name='customer.phoneNumber']`).type(ph)
    }
    inputSSN(ssn){
        cy.get(`input[name='customer.ssn']`).type(ssn)
    }
    inputUsername(usern){
        cy.get(`input[name='customer.username']`).type(usern)

    }
    inputPassword(pass){
        cy.get(`input[name='customer.password']`).type(pass)
    }
    inputConfirmPassword(cpass){
        cy.get(`input[name='repeatedPassword']`).type(cpass)
    }
    registerButton(){
        cy.get(`input[value='Register']`).click()
    }

}