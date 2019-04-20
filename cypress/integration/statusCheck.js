describe('Check status of OPT',function(){

    beforeEach(function(){
        cy.visit('https://egov.uscis.gov/casestatus/landing.do');
    });

    it('Check OPT status - Abhijith',function(){
        checkStatus('YSC1990163276','Abhijith','abhijith2893@gmail.com')

    });

    it('Check OPT status - Philip',function(){
        checkStatus('YSC1990160493','Philip','philipthomas7394@gmail.com')

    });

    function checkStatus (appNumber,name,email){

        cy.get('#receipt_number')
            .type(appNumber)
        cy.get('input[type=submit]')
            .click({type:true})
        cy.get('h1').invoke('text').then((text)=>{
            cy.task('log',text)
            cy.task('sendMail',{text,name,email,appNumber})
                .then(()=>{
                    cy.wait(5000)
                })
        })

    }
});

