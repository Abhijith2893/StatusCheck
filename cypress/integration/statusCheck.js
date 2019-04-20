describe('Check status of OPT',function(){

    it('Check the status',function(){


        cy.visit('https://egov.uscis.gov/casestatus/landing.do')
        cy.get('#receipt_number')
            .type('YSC1990163276')
        cy.get('input[type=submit]')
            .click({type:true})
        cy.get('h1').invoke('text').then((text)=>{
            cy.task('log',text)
            cy.task('sendMail',text)
                .then(()=>{
                    cy.wait(5000)
                })
        })
    })
})

