export class TransferPage{
    TransferPagelink(){
    cy.get('#leftPanel > ul > :nth-child(3) > a').click()
    }
    inputAmount(am){
        cy.get('#amount').type(am)
    }
    fromAccId(fA){
        cy.get('#fromAccountId').select(fA)
    }
    toAccId(tA){
        cy.get('#toAccountId').select(tA)
    }
    submit(){
        cy.get(':nth-child(4) > .button').click()
    }
    //cy.get('#showResult > .title')
    //cy.get('#showResult > :nth-child(2)')
    //cy.get('#showResult > :nth-child(3)')
}