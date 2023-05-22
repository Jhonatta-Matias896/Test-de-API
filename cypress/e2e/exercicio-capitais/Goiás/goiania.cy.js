// const { expect } = require("chai");
// const { describe } = require("mocha");

describe('Busca um CEP e válida o status code e os dados do response', () => {

    it('Cenário valido, vália um CEP de Goiânia, capital de Goiás', () => {

        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/74063900'
        })
            .then((response) => {

                expect(response.status).to.equal(200);


                expect(response.body.address).to.equal('Avenida Goiás, 2001')
                expect(response.body.number).to.equal('74063900')
                expect(response.body.city).to.equal('Goiânia')
                expect(response.body.longitude).to.equal(-49.26264)
                expect(response.body.state).to.equal('GO')
                expect(response.body.id).to.equal('74063900-23042')
                expect(response.body.complement).to.equal('Câmara Municipal de Goiânia')
                expect(response.body.latitude).to.equal(-16.6643)
                expect(response.body.neighborhood).to.equal('Setor Central')
                expect(response.body.blockDelivery).to.equal(false)
            })
    })
});