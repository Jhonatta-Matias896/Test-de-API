// const { expect } = require("chai");
// const { describe } = require("mocha");

describe('Busca um CEP e válida o status code e os dados do response', () => {

    it('Cenário valido, válida um CEP de Aracaju, capital do Sergipe', () => {

        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/49010060'
        })
            .then((response) => {
                expect(response.status).to.equal(200);

                expect(response.body.address).to.equal('Praça Almirante Barroso')
                expect(response.body.number).to.equal('49010060')
                expect(response.body.city).to.equal('Aracaju')
                expect(response.body.longitude).to.equal(-37.0494675)
                expect(response.body.state).to.equal('SE')
                expect(response.body.id).to.equal('49010060-23042')
                expect(response.body.latitude).to.equal(-10.9138056)
                expect(response.body.neighborhood).to.equal('Centro')
                expect(response.body.blockDelivery).to.equal(false)

            })
    })
});