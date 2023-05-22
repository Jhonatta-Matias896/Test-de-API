// const { expect } = require("chai");
// const { describe } = require("mocha");

describe('Busca um CEP e válida o status code e os dados do response', () => {

    it('Cenário valido, válida um CEP de São Paulo', () => {

        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/01025020'
        })
            .then((response) => {

                expect(response.status).to.equal(200);

                expect(response.body.address).to.equal('Avenida do Estado')
                expect(response.body.number).to.equal('01025020')
                expect(response.body.city).to.equal('São Paulo')
                expect(response.body.longitude).to.equal(-46.6269337)
                expect(response.body.state).to.equal('SP')
                expect(response.body.id).to.equal('01025020-23042')
                expect(response.body.complement).to.equal('- de 2602 a 4400 - lado par')
                expect(response.body.latitude).to.equal(-23.5375222)
                expect(response.body.neighborhood).to.equal('Centro')
                expect(response.body.blockDelivery).to.equal(false)
            })
    })
});