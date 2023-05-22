
//const { describe, it } = require("node:test");

//Descrição da automação
describe('Busca um CEP e valida o status code e os dados do response', () => {


  //Descrição do cenario/caso/modelagem de testes
  it('Cenário válido - Valida um CEP de Rio Branco, Capital do Acre', () => {


    //Especifica que a automação será voltada á API
    cy.request({


      // // Especifica qual o método HTTP que será usado(GET,POST,PUT,DELETE)    
      method: 'GET',

      //Especifica qual a URL e o Endpoint que será usado
      url: 'https://cep-v2-americanas-npf.b2w.io/cep/69900013'
    })
      //Especifica quais são os resultados esperados no status code e response
      .then((response) => {

        //Especifica o resultado esperado do status code
        expect(response.status).to.equal(200);

        //Especifica o resultado esperado do response
        expect(response.body.address).to.equal("Travessa Cruzeiro do Sul")
        expect(response.body.number).to.equal('69900013')
        expect(response.body.city).to.equal('Rio Branco')
        expect(response.body.longitude).to.equal(-67.8111363)
        expect(response.body.state).to.equal('AC')
        expect(response.body.id).to.equal('69900013-23042')
        expect(response.body.latitude).to.equal(-9.9789757)
        expect(response.body.neighborhood).to.equal('Base')
        expect(response.body.blockDelivery).to.equal(false)
      })
  })
});