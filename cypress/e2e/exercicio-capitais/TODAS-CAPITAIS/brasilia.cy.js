// const { expect } = require("chai");
// const { describe } = require("mocha");

describe('Busca um CEP e válida os status code e os dados do response', () => {

    it('cenário valido, válida um CEP de Brasília, capital do Distrito Federal', () => {

        cy.request({

            method: 'GET',

            url: 'https://cep-v2-americanas-npf.b2w.io/cep/70635815'
        })
            .then((response) => {

                expect(response.status).to.equal(200);

                expect(response.body.address).to.equal('Parque Capital Digital Lote 4')
                expect(response.body.number).to.equal('70635815')
                expect(response.body.city).to.equal('Brasília')
                expect(response.body.longitude).to.equal(-47.9231572)
                expect(response.body.state).to.equal('DF')
                expect(response.body.id).to.equal('70635815-23042')
                expect(response.body.latitude).to.equal(-15.7384797)
                expect(response.body.neighborhood).to.equal('Zona Industrial')
                expect(response.body.blockDelivery).to.equal(false)

            })

    })
});