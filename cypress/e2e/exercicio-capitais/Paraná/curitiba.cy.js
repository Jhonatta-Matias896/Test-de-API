// const { expect } = require("chai");
// const { describe } = require("mocha");

describe('Busca um CEP e válida o status code e os dados do response', () =>{

    it('Cenário valido, Válida um CEP de Curitiba, capital do Paraná', ()=>{

        cy.request ({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/80410210'
        })
        .then((response) =>{
            expect(response.status).to.equal(200);

        expect(response.body.address).to.equal('Alameda Cabral')
        expect(response.body.number).to.equal('80410210')
        expect(response.body.city).to.equal('Curitiba')
        expect(response.body.longitude).to.equal(-49.2779095)
        expect(response.body.state).to.equal('PR')
        expect(response.body.id).to.equal('80410210-23042')
        expect(response.body.complement).to.equal('- até 394/395')
        expect(response.body.latitude).to.equal(-25.4294786)
        expect(response.body.neighborhood).to.equal('Centro')
        expect(response.body.blockDelivery).to.equal(false)
        })
    })
})