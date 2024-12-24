import {RegistrationPage} from './pages/register';
import {LoginPage} from './pages/login';
import {NewAccount} from './pages/createna';
import {TransferPage} from './pages/transfer';
import {LoanPage} from './pages/loan';
import { Logout } from './pages/logout';

const registrationPage = new RegistrationPage()
const loginPage = new LoginPage()
const newAccount = new NewAccount()
const transfer = new TransferPage()
const loan = new LoanPage()
const logout = new Logout()

beforeEach(function() {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    
}),
describe('all tests', () => {
  // it('passes', () => {
  //   cy.visit('https://parabank.parasoft.com/parabank/index.htm')
  // }),
  it('Register', () => {
    //cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    registrationPage.redirect()
    registrationPage.titlecheck()
    registrationPage.inputFirstName('test')
    registrationPage.inputLastName('beans')
    registrationPage.inputAddress('test address')
    registrationPage.inputCity('test city')
    registrationPage.inputState('test state')
    registrationPage.inputZipCode('9473')
    registrationPage.inputPhone('345672')
    registrationPage.inputSSN('367892')
    registrationPage.inputUsername('beantest')
    registrationPage.inputPassword('Password')
    registrationPage.inputConfirmPassword('Password')
    registrationPage.registerButton()
  }),

  it('login with valid details', ()=>{
    //cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    loginPage.inputUsername('beantest')
    loginPage.inputPassword('password')
    loginPage.loginButton()

   }),
  it('login with invalid details', ()=>{
    //cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    loginPage.inputUsername('beatest')
    loginPage.inputPassword('pasword')
    loginPage.loginButton()
    cy.get('#rightPanel > p').should('be.visible')

 }),
  it('create a new account ',()=>{
    //cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    loginPage.inputUsername('beantest')
    loginPage.inputPassword('Password')
    loginPage.loginButton()

    newAccount.linkAcc()
    newAccount.accId(0)
    newAccount.selectAccType('SAVINGS')
    newAccount.openAccButton()
    cy.get('#openAccountResult > .title').should('be.visible')
    cy.get('#openAccountResult > :nth-child(2)').should('be.visible')
    cy.get('#openAccountResult > :nth-child(3)').should('be.visible')

  }),
  it('transfer',()=>{
    //cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    loginPage.inputUsername('beantest')
    loginPage.inputPassword('Password')
    loginPage.loginButton()

    transfer.TransferPagelink()
    transfer.inputAmount('3452')
    transfer.fromAccId(0)
    transfer.toAccId(1)
    transfer.submit()
    cy.get('#showResult > .title').should('be.visible')
    cy.get('#showResult > :nth-child(2)').should('be.visible')
    cy.get('#showResult > :nth-child(3)').should('be.visible')

  }),
    it('loan',()=>{
    //cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    loginPage.inputUsername('beantest')
    loginPage.inputPassword('Password')
    loginPage.loginButton()

    loan.LoanPagelink()
    loan.loanAmount('3400')
    loan.fromAccId(0)
    loan.downPayment('23')
    loan.submitRequest()


    cy.get('#requestLoanResult > .title').should('be.visible')
    cy.get('.form').should('be.visible')
    cy.get('#loanProviderName').should('be.visible')
    cy.get('#responseDate').should('be.visible')
    cy.get('#loanStatus').should('be.visible')
    cy.get('#loanRequestDenied > .error').should('be.visible')

  }),
   it('endtoend ',() => {
    //cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    registrationPage.redirect()
    registrationPage.inputFirstName('test')
    registrationPage.inputLastName('beans')
    registrationPage.inputAddress('test address')
    registrationPage.inputCity('test city')
    registrationPage.inputState('test state')
    registrationPage.inputZipCode('9473')
    registrationPage.inputPhone('345672')
    registrationPage.inputSSN('367892')
    registrationPage.inputUsername('beantest')
    registrationPage.inputPassword('Password')
    registrationPage.inputConfirmPassword('Password')
    registrationPage.registerButton()
    cy.wait(1000)


    loginPage.inputUsername('beantest')
    loginPage.inputPassword('Password')
    loginPage.loginButton()
    
    newAccount.linkAcc()
    newAccount.accId(0)
    newAccount.selectAccType('SAVINGS')
    newAccount.openAccButton()

    cy.get('#openAccountResult > .title').should('be.visible')
    cy.get('#openAccountResult > :nth-child(2)').should('be.visible')
    cy.get('#openAccountResult > :nth-child(3)').should('be.visible')
    transfer.TransferPagelink()
    transfer.inputAmount('3452')
    transfer.fromAccId(0)
    transfer.toAccId(1)
    transfer.submit()
    
    cy.get('#showResult > .title').should('be.visible')
    cy.get('#showResult > :nth-child(2)').should('be.visible')
    cy.get('#showResult > :nth-child(3)').should('be.visible')

    loan.LoanPagelink()
    loan.loanAmount('3400')
    loan.fromAccId(0)
    loan.downPayment('23')
    loan.submitRequest()

    cy.get('#requestLoanResult > .title').should('be.visible')
    cy.get('.form').should('be.visible')
    cy.get('#loanProviderName').should('be.visible')
    cy.get('#responseDate').should('be.visible')
    cy.get('#loanStatus').should('be.visible')
    cy.get('#loanRequestDenied > .error').should('be.visible')


    logout.logout()

  })
  
})
