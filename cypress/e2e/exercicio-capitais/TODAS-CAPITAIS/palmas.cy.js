// const { expect } = require("chai");
// const { describe } = require("mocha");

describe('Busca um CEP e válida o status code e os dados do response', () => {
    it('Cenário valido, válida um CEP de Palmas, capital do Tocantins', () => {

        cy.request({
            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/77015594'
        })

            .then((response) => {
                expect(response.status).to.equal(200);

                expect(response.body.address).to.equal('Quadra ACSV SO 41')
                expect(response.body.number).to.equal('77015594')
                expect(response.body.city).to.equal('Palmas')
                expect(response.body.longitude).to.equal(-48.3405378)
                expect(response.body.state).to.equal('TO')
                expect(response.body.id).to.equal('77015594-23042')
                expect(response.body.latitude).to.equal(-10.2045566)
                expect(response.body.neighborhood).to.equal('Plano Diretor Sul')
                expect(response.body.blockDelivery).to.equal(false)
            })
    })
});