export class LoginPage{
    inputUsername(username) {
        cy.get(`input[name='username']`).type(username)
    }
    inputPassword(password) {
        cy.get(`input[name='password']`).type(password)
    }
    loginButton(){
        cy.get(`input[value='Log In']`).click()
    }
}