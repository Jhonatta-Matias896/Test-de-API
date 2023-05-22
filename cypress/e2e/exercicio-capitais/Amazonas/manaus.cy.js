// const { expect } = require("chai");
// const { describe } = require("mocha");
//const { expect } = require("chai");

describe('Busca e válida um CEP estatus code e os dados do response', () => {

    it('Cenário valido, válida um CEP de Manaus, capital do Amazonas', () => {
        cy.request({

            method: 'GET',

            url: 'https://cep-v2-americanas-npf.b2w.io/cep/69025070'
        })
            .then((response) => {

                expect(response.status).to.equal(200);


                expect(response.body.address).to.equal('Avenida Álvaro Maia')
                expect(response.body.number).to.equal('69025070')
                expect(response.body.city).to.equal('Manaus')
                expect(response.body.longitude).to.equal(-60.0159606)
                expect(response.body.state).to.equal('AM')
                expect(response.body.id).to.equal('69025070-23042')
                expect(response.body.complement).to.equal('- até 1160 - lado par')
                expect(response.body.latitude).to.equal(-3.1161123)
                expect(response.body.neighborhood).to.equal('Centro')
                expect(response.body.blockDelivery).to.equal(false)
            })
    })
});