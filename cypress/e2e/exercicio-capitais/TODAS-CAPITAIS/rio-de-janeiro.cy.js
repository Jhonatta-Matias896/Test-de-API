// const { expect } = require("chai");
// const { describe } = require("mocha");

describe('Busca um CEP e válida o status code e os dados do response', () => {

    it('Cenário valido, válida um CEP do Rio de Janeiro', () => {

        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/20021000'
        })
            .then((response) => {
                expect(response.status).to.equal(200);

                expect(response.body.address).to.equal('Avenida Alfred Agache')
                expect(response.body.number).to.equal('20021000')
                expect(response.body.city).to.equal('Rio de Janeiro')
                expect(response.body.longitude).to.equal(-43.1705676)
                expect(response.body.state).to.equal('RJ')
                expect(response.body.id).to.equal('20021000-23042')
                expect(response.body.latitude).to.equal(-22.9048478)
                expect(response.body.neighborhood).to.equal('Centro')
                expect(response.body.blockDelivery).to.equal(false)
            })
    })
});