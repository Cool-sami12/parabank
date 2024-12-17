export class LoanPage{
    LoanPagelink(){
        cy.get('#leftPanel > ul > :nth-child(7) > a').click()
    }
    loanAmount(am){
        cy.get('#amount').type(am)
    }
    downPayment(dp){
        cy.get('#downPayment').type(dp)
    }
    fromAccId(AI){
        cy.get('#fromAccountId').select(AI)
    }
    submitRequest(){
        cy.get('[colspan="2"] > .button').click()
    }

    //cy.get('#requestLoanResult > .title')
    // cy.get('.form')
    //cy.get('#loanRequestApproved > :nth-child(1)')
    // cy.get('#loanRequestApproved > :nth-child(2)')
}