// const { expect } = require("chai");
// const { describe } = require("mocha");

describe('Busca um CEP e válida o status code e os dados do response', () => {

    it('Cenário valido, válida um CEP de João Pessoa, capital do Paraíba', () => {

        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/58013120'
        })

            .then((response) => {

                expect(response.status).to.equal(200);

                expect(response.body.address).to.equal('Avenida Almirante Barroso')
                expect(response.body.number).to.equal('58013120')
                expect(response.body.city).to.equal('João Pessoa')
                expect(response.body.longitude).to.equal(-34.8739247)
                expect(response.body.state).to.equal('PB')
                expect(response.body.id).to.equal('58013120-23042')
                expect(response.body.latitude).to.equal(-7.1201965)
                expect(response.body.neighborhood).to.equal('Centro')
                expect(response.body.blockDelivery).to.equal(false)
            })
    })

});