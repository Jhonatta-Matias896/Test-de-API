// const { expect } = require("chai");
// const { describe } = require("mocha");

describe('Busca um CEP e válida o status code e os dados do response', () => {

    it('Cenário valido, Válida um CEP de Belo Horizonte, capital de Minas Gerais', () => {

        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/31630900'
        })
            .then((response) => {

                expect(response.status).to.equal(200);

                expect(response.body.address).to.equal('Rodovia Papa João Paulo II, 4143')
                expect(response.body.number).to.equal('31630900')
                expect(response.body.city).to.equal('Belo Horizonte')
                expect(response.body.longitude).to.equal(-43.9501664)
                expect(response.body.state).to.equal('MG')
                expect(response.body.id).to.equal('31630900-23042')
                expect(response.body.complement).to.equal('Cidade Administrativa do Governo de Minas Gerais - Prédio Minas')
                expect(response.body.latitude).to.equal(-19.8036781)
                expect(response.body.neighborhood).to.equal('Serra Verde (Venda Nova)')
                expect(response.body.blockDelivery).to.equal(false)
            })
    })
});