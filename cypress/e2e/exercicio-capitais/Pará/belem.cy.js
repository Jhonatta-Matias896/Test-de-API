// const { expect } = require("chai");
// const { describe } = require("mocha");

describe('Busca um CEP e válida o status code e os dados do response', () => {

    it('Cenário valido, Válida um CEP de Belém, capital do Pará', () => {

        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/66023902'
        })
            .then((response) => {
                expect(response.status).to.equal(200);

                expect(response.body.address).to.equal('Travessa Padre Eutíquio, 1122')
                expect(response.body.number).to.equal('66023902')
                expect(response.body.city).to.equal('Belém')
                expect(response.body.longitude).to.equal(-48.4948773)
                expect(response.body.state).to.equal('PA')
                expect(response.body.id).to.equal('66023902-23042')
                expect(response.body.complement).to.equal('Shopping Center Iguatemi')
                expect(response.body.latitude).to.equal(-1.4578484)
                expect(response.body.neighborhood).to.equal('Batista Campos')
                expect(response.body.blockDelivery).to.equal(false)
            })
    })
});