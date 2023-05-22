// const { expect } = require("chai");
// const { describe } = require("mocha");

describe('Busca um CEP e válida o status code e os dados do response', () => {

    it('Cenário Valido, Válida um CEP de Recife, capital do Pernambuco', () => {

        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/51230000'
        })
            .then((response) => {
                expect(response.status).to.equal(200);

                expect(response.body.address).to.equal('Avenida Dois Rios')
                expect(response.body.number).to.equal('51230000')
                expect(response.body.city).to.equal('Recife')
                expect(response.body.longitude).to.equal(-34.9440236)
                expect(response.body.state).to.equal('PE')
                expect(response.body.id).to.equal('51230000-23042')
                expect(response.body.latitude).to.equal(-8.1207879)
                expect(response.body.neighborhood).to.equal('Ibura')
                expect(response.body.blockDelivery).to.equal(false)
            })
    })
});