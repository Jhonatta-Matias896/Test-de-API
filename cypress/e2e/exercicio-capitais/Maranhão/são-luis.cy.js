// const { expect } = require("chai");
// const { describe } = require("mocha");

describe('Busca um CEP e válida o status code e os dados do response', () => {

    it('Cenário valido, Válida um CEP de São Luís, capital de Maranhão', () => {

        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/65010030'
        })

            .then((response) => {
                expect(response.status).to.equal(200);


                expect(response.body.address).to.equal('Rua Afonso Pena')
                expect(response.body.number).to.equal('65010030')
                expect(response.body.city).to.equal('São Luís')
                expect(response.body.longitude).to.equal(-44.3034882)
                expect(response.body.state).to.equal('MA')
                expect(response.body.id).to.equal('65010030-23042')
                expect(response.body.latitude).to.equal(-2.5324691)
                expect(response.body.neighborhood).to.equal('Centro')
                expect(response.body.blockDelivery).to.equal(false)
            })

    })
});