// const { expect } = require("chai");
// const { describe } = require("mocha");

describe('Busca um CEP e válida o status code e os dados do response', () => {

    it('Cenário valido, válida um CEP de Teresina, capital do Piauí', () => {

        cy.request({
            method: 'GET',

            url: 'https://cep-v2-americanas-npf.b2w.io/cep/64000200'
        })

            .then((response) => {

                expect(response.status).to.equal(200);

                expect(response.body.address).to.equal('Rua Lisandro Nogueira')
                expect(response.body.number).to.equal('64000200')
                expect(response.body.city).to.equal('Teresina')
                expect(response.body.longitude).to.equal(-42.81386579999999)
                expect(response.body.state).to.equal('PI')
                expect(response.body.id).to.equal('64000200-23042')
                expect(response.body.latitude).to.equal(-5.087029999999999)
                expect(response.body.neighborhood).to.equal('Centro')
                expect(response.body.blockDelivery).to.equal(false)
            })

    })
});