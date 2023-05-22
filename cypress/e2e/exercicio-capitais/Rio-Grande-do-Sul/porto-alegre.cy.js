// const { expect } = require("chai");
// const { describe } = require("mocha");

describe('Busca um CEP e válida o status code e os dados do response', () => {

    it('Cenário valido, válida um CEP de Porto Alegre, capital do Rio Grande do Sul', () => {

        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/90010530'
        })
            .then((response) => {
                expect(response.status).to.equal(200);

                expect(response.body.address).to.equal('Jardim Fernando Machado')
                expect(response.body.number).to.equal('90010530')
                expect(response.body.city).to.equal('Porto Alegre')
                expect(response.body.longitude).to.equal(-51.2280599)
                expect(response.body.state).to.equal('RS')
                expect(response.body.id).to.equal('90010530-23042')
                expect(response.body.latitude).to.equal(-30.0285908)
                expect(response.body.neighborhood).to.equal('Centro Histórico')
                expect(response.body.blockDelivery).to.equal(false)
            })
    })
});