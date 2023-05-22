// const { expect } = require("chai");
// const { describe } = require("mocha");

describe('Busca um CEP e válida o status code e o dados do response', () => {

    it('Cenário valido, válida um CEP de Cuiabá, capital do Mato Grosso', () => {

        cy.request({
            
            method: 'GET', 
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/78020008'
        })
        .then((response) =>{
            expect(response.status).to.equal(200);


            expect(response.body.address).to.equal('Avenida Marechal Deodoro')
            expect(response.body.number).to.equal('78020008')
            expect(response.body.city).to.equal('Cuiabá')
            expect(response.body.longitude).to.equal(-56.10165989999999)
            expect(response.body.state).to.equal('MT')
            expect(response.body.id).to.equal('78020008-23042')
            expect(response.body.complement).to.equal('- de 1900/1901 a 2072/2073')
            expect(response.body.latitude).to.equal(-15.5956926)
            expect(response.body.neighborhood).to.equal('Centro-Sul')
            expect(response.body.blockDelivery).to.equal(false)

        })
    })
});