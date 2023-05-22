// const { expect } = require("chai");
// const { describe } = require("mocha");

describe('Busca um CEP e válida o status code e o response', () => {
    it('Cenário válido, valida um CEP de Maceió, Capital do Alagoas', () => {

        cy.request({

            method: 'GET',

            url: 'https://cep-v2-americanas-npf.b2w.io/cep/57020084'
        })
            .then((response) => {

                expect(response.status).to.equal(200);


                expect(response.body.address).to.equal('1ª Travessa Francisco de Menezes')
                expect(response.body.number).to.equal('57020084')
                expect(response.body.city).to.equal('Maceió')
                expect(response.body.longitude).to.equal(-35.7397785)
                expect(response.body.state).to.equal('AL')
                expect(response.body.id).to.equal('57020084-23042')
                expect(response.body.latitude).to.equal(-9.656386399999999)
                expect(response.body.neighborhood).to.equal('Centro')
                expect(response.body.blockDelivery).to.equal(false)

            })

    })
});