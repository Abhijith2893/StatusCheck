describe('Check status of OPT',function(){

    it('Check OPT status - Abhijith',function(){
        cy.visit('https://egov.uscis.gov/casestatus/landing.do')
            .then(()=>{
		    cy.wait(2000)
                checkStatus('','','') //Pass in application number, name and email
            })
    });

    function checkStatus (appNumber,name,email){

        cy.get('#receipt_number')
            .type(appNumber)
        cy.get('input[type=submit]')
            .click({type:true})
        cy.get('h1').invoke('text').then((text)=>{
            cy.task('log',text)
		cy.task('sendSMS',{text,name,email,appNumber})
                .then(()=>{
                    cy.wait(5000)
                })
        })

    }
});

