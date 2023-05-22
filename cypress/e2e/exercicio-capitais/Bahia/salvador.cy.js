describe('Busca um CEP e valida o status code e os dados do response', () => {

  // Descrição do cenario/caso/modelagem de testes
  it('Cenario valido - Válida um CEP de Salvador, capital da Bahia', () => {

    // Especifica que a automação será voltada á API
    cy.request({

      // Especifica qual o metodo HTTP que será usado (GET, POST, PUT e DELETE)
      method: 'GET',

      // Especifica qual a URL e o Endpoint que será usado
      url: 'https://cep-v2-americanas-npf.b2w.io/cep/40026280'

    })

      // Especifica quais são os resultados esperados do status code e response
      .then((response) => {

        // Especifica o resultado esperado do status code
        expect(response.status).to.equal(200);

        // Especifica o resultado esperado do response
        expect(response.body.address).to.equal('Largo do Pelourinho')
        expect(response.body.number).to.equal('40026280')
        expect(response.body.city).to.equal('Salvador')
        expect(response.body.longitude).to.equal(-38.5082511)
        expect(response.body.state).to.equal('BA')
        expect(response.body.id).to.equal('40026280-23042')
        expect(response.body.latitude).to.equal(-12.9711691)
        expect(response.body.neighborhood).to.equal('Centro Histórico')
        expect(response.body.blockDelivery).to.equal(false)

      })

  })
});







