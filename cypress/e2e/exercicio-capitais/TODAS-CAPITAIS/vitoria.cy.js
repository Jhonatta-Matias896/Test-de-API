// const { expect } = require("chai");
// const { describe } = require("mocha");

describe('Busca um CEP e válida o status code e os dados do response', () => {

    it('Cenário valido, Válida um CEP de Vitória, capital do Espírito Santo', () => {

        cy.request({

            method: 'GET',

            url: 'https://cep-v2-americanas-npf.b2w.io/cep/29015040'
        })
            .then((response) => {

                expect(response.status).to.equal(200);

                expect(response.body.address).to.equal('Avenida Cleto Nunes')
                expect(response.body.number).to.equal('29015040')
                expect(response.body.city).to.equal('Vitória')
                expect(response.body.longitude).to.equal(-40.3420224)
                expect(response.body.state).to.equal('ES')
                expect(response.body.id).to.equal('29015040-23042')
                expect(response.body.latitude).to.equal(-20.3200993)
                expect(response.body.neighborhood).to.equal('Centro')
                expect(response.body.blockDelivery).to.equal(false)


            })
    })
});