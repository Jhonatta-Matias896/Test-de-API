// const { expect } = require("chai");
// const { describe } = require("mocha");

describe('Busca um CEP e válida o status code e os dados do response', () => {

    it('Cenário valido, Válida um CEP de Campo Grande, capital do Mato Grosso do Sul', () => {

        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/79002030'
        })

            .then((response) => {
                expect(response.status).to.equal(200);

                expect(response.body.address).to.equal('Avenida João Rosa Pires')
                expect(response.body.number).to.equal('79002030')
                expect(response.body.city).to.equal('Campo Grande')
                expect(response.body.longitude).to.equal(-54.6219244)
                expect(response.body.state).to.equal('MS')
                expect(response.body.id).to.equal('79002030-23042')
                expect(response.body.complement).to.equal('- até 122/123')
                expect(response.body.latitude).to.equal(-20.4660274)
                expect(response.body.neighborhood).to.equal('Centro')
                expect(response.body.blockDelivery).to.equal(false)
            })
    })
});