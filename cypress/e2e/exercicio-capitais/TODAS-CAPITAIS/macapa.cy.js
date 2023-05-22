// const { expect } = require("chai");
// const { describe } = require("mocha");

describe('Busca um CEP e válida o status code e response', () => {

    it('Cenário válido, valida um CEP de Macapá, capital do Amapá', () => {

        cy.request({

            method: 'GET',

            url: 'https://cep-v2-americanas-npf.b2w.io/cep/68900014'
        })
            .then((response) => {
                expect(response.status).to.equal(200);

                expect(response.body.address).to.equal('Alameda Isac Alcolumbre')
                expect(response.body.number).to.equal('68900014')
                expect(response.body.city).to.equal('Macapá')
                expect(response.body.longitude).to.equal(-51.0582734)
                expect(response.body.state).to.equal('AP')
                expect(response.body.id).to.equal('68900014-23042')
                expect(response.body.latitude).to.equal(0.0347215)
                expect(response.body.neighborhood).to.equal('Central')
                expect(response.body.blockDelivery).to.equal(false)
            })
    })
});