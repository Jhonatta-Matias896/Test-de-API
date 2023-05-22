// const { expect } = require("chai");
// const { describe } = require("mocha");

describe('Busca um CEP e valida o status code e os dados do response', () => {

    it('Cenário valido, válida um CEP de Fortaleza, capital do Ceará', () => {

        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/60055040'
        })
            .then((response) => {

                expect(response.status).to.equal(200);

                expect(response.body.address).to.equal('Avenida do Forte')
                expect(response.body.number).to.equal('60055040')
                expect(response.body.city).to.equal('Fortaleza')
                expect(response.body.longitude).to.equal(-38.4823416)
                expect(response.body.state).to.equal('CE')
                expect(response.body.id).to.equal('60055040-23042')
                expect(response.body.latitude).to.equal(-3.7780815)
                expect(response.body.neighborhood).to.equal('Centro')
                expect(response.body.blockDelivery).to.equal(false)
            })

    })
});