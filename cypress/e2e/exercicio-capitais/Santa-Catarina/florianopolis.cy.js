// const { expect } = require("chai");
// const { describe } = require("mocha");

describe('Busca um CEP e válida o status code e os dados do response', () => {

    it('Cenário valido, válida um CEP de Florianópolis, capital de Santa Catarina', () => {

        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/88010290'
        })
            .then((response) => {
                expect(response.status).to.equal(200);


                expect(response.body.address).to.equal('Avenida Governador Gustavo Richard')
                expect(response.body.number).to.equal('88010290')
                expect(response.body.city).to.equal('Florianópolis')
                expect(response.body.longitude).to.equal(-48.5549223)
                expect(response.body.state).to.equal('SC')
                expect(response.body.id).to.equal('88010290-23042')
                expect(response.body.complement).to.equal('- até 899/900')
                expect(response.body.latitude).to.equal(-27.597679)
                expect(response.body.neighborhood).to.equal('Centro')
                expect(response.body.blockDelivery).to.equal(false)

            })
    })
});