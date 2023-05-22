// const { expect } = require("chai");
// const { describe } = require("mocha");

describe('Busca um CEP e válida o status code e os dados do response', () => {

    it('Cenário valido, válida um CEP de Natal, capital do Rio Grande do Sul', () => {

        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/59070500'
        })
            .then((response) => {

                expect(response.status).to.equal(200);


                expect(response.body.address).to.equal('Avenida Rio Grande do Norte')
                expect(response.body.number).to.equal('59070500')
                expect(response.body.city).to.equal('Natal')
                expect(response.body.longitude).to.equal(-35.2380527)
                expect(response.body.state).to.equal('RN')
                expect(response.body.id).to.equal('59070500-23042')
                expect(response.body.latitude).to.equal(-5.826743599999999)
                expect(response.body.neighborhood).to.equal('Cidade da Esperança')
                expect(response.body.blockDelivery).to.equal(false)

            })
    })
});