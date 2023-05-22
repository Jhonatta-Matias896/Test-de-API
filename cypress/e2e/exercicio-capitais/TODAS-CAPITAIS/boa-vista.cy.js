// const { expect } = require("chai");
// const { describe } = require("mocha");

describe('Busca um CEP e válida o status code e os dados do response', () => {

    it('Cenário valido, válida um CEP de Boa Vista, capital de Roraima', () => {

        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/69301410'
        })
            .then((response) => {
                expect(response.status).to.equal(200);

                expect(response.body.address).to.equal('Avenida Capitão Júlio Bezerra')
                expect(response.body.number).to.equal('69301410')
                expect(response.body.city).to.equal('Boa Vista')
                expect(response.body.longitude).to.equal(-60.67125369999999)
                expect(response.body.state).to.equal('RR')
                expect(response.body.id).to.equal('69301410-23042')
                expect(response.body.complement).to.equal('- até 717/718')
                expect(response.body.latitude).to.equal(2.8283424)
                expect(response.body.neighborhood).to.equal('Centro')
                expect(response.body.blockDelivery).to.equal(false)

            })
    })
});