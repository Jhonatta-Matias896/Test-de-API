// const { expect } = require("chai");
// const { describe } = require("mocha");

describe('Busca um CEP e válida o status code e os dados do response', () => {

    it('Cenário valido, válida um CEP de Porto Velho, capital de Rondônia', () => {

        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/76801008'
        })
            .then((response) => {
                expect(response.status).to.equal(200);

                expect(response.body.address).to.equal('Beco Coronel Carlos Mader')
                expect(response.body.number).to.equal('76801008')
                expect(response.body.city).to.equal('Porto Velho')
                expect(response.body.longitude).to.equal(-63.9094837)
                expect(response.body.state).to.equal('RO')
                expect(response.body.id).to.equal('76801008-23042')
                expect(response.body.latitude).to.equal(-8.7612962)
                expect(response.body.neighborhood).to.equal('Centro')
                expect(response.body.blockDelivery).to.equal(false)
            })
    })
});