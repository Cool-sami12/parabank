export class NewAccount{
    linkAcc(){
        cy.get('#leftPanel > ul > :nth-child(1) > a').click()
    }
    selectAccType(sv){
        cy.get('#type').select(sv)
    }
    accId(id){
        cy.get('#fromAccountId').select(id)
    
    }
    openAccButton(){
        cy.get('form > div > .button').click()
    }
    //cy.get('#openAccountResult > .title')
    // cy.get('#openAccountResult > :nth-child(2)')
    // cy.get(':nth-child(3) > b')
    //cy.get('#newAccountId')
}