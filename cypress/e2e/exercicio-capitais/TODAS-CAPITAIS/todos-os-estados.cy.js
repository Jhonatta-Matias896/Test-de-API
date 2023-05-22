describe('Busca um CEP de cada estado brasileiro e válida o status code e os dados do response.', () => {

    // SE
    it('Cenário valido, válida um CEP de Aracaju, capital do Sergipe', () => {

        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/49010060'
        })
            .then((response) => {
                expect(response.status).to.equal(200);

                expect(response.body.address).to.equal('Praça Almirante Barroso')
                expect(response.body.number).to.equal('49010060')
                expect(response.body.city).to.equal('Aracaju')
                expect(response.body.longitude).to.equal(-37.0494675)
                expect(response.body.state).to.equal('SE')
                expect(response.body.id).to.equal('49010060-23042')
                expect(response.body.latitude).to.equal(-10.9138056)
                expect(response.body.neighborhood).to.equal('Centro')
                expect(response.body.blockDelivery).to.equal(false)

            })
    })


    //PA
    it('Cenário valido, válida um CEP de Belém, capital do Pará', () => {

        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/66023902'
        })
            .then((response) => {
                expect(response.status).to.equal(200);

                expect(response.body.address).to.equal('Travessa Padre Eutíquio, 1122')
                expect(response.body.number).to.equal('66023902')
                expect(response.body.city).to.equal('Belém')
                expect(response.body.longitude).to.equal(-48.4948773)
                expect(response.body.state).to.equal('PA')
                expect(response.body.id).to.equal('66023902-23042')
                expect(response.body.complement).to.equal('Shopping Center Iguatemi')
                expect(response.body.latitude).to.equal(-1.4578484)
                expect(response.body.neighborhood).to.equal('Batista Campos')
                expect(response.body.blockDelivery).to.equal(false)
            })
    });

    // MG
    it('Cenário valido, válida um CEP de Belo Horizonte, capital de Minas Gerais', () => {

        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/31630900'
        })
            .then((response) => {

                expect(response.status).to.equal(200);

                expect(response.body.address).to.equal('Rodovia Papa João Paulo II, 4143')
                expect(response.body.number).to.equal('31630900')
                expect(response.body.city).to.equal('Belo Horizonte')
                expect(response.body.longitude).to.equal(-43.9501664)
                expect(response.body.state).to.equal('MG')
                expect(response.body.id).to.equal('31630900-23042')
                expect(response.body.complement).to.equal('Cidade Administrativa do Governo de Minas Gerais - Prédio Minas')
                expect(response.body.latitude).to.equal(-19.8036781)
                expect(response.body.neighborhood).to.equal('Serra Verde (Venda Nova)')
                expect(response.body.blockDelivery).to.equal(false)
            })
    });

    //RR
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
    });

    //DF
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

    });

    //MS
    it('Cenário valido, válida um CEP de Campo Grande, capital do Mato Grosso do Sul', () => {

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
    });

    //MT
    it('Cenário valido, válida um CEP de Cuiabá, capital do Mato Grosso', () => {

        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/78020008'
        })
            .then((response) => {
                expect(response.status).to.equal(200);


                expect(response.body.address).to.equal('Avenida Marechal Deodoro')
                expect(response.body.number).to.equal('78020008')
                expect(response.body.city).to.equal('Cuiabá')
                expect(response.body.longitude).to.equal(-56.10165989999999)
                expect(response.body.state).to.equal('MT')
                expect(response.body.id).to.equal('78020008-23042')
                expect(response.body.complement).to.equal('- de 1900/1901 a 2072/2073')
                expect(response.body.latitude).to.equal(-15.5956926)
                expect(response.body.neighborhood).to.equal('Centro-Sul')
                expect(response.body.blockDelivery).to.equal(false)

            })
    });

    //PR
    it('Cenário valido, válida um CEP de Curitiba, capital do Paraná', () => {

        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/80410210'
        })
            .then((response) => {
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
    });

    //SC
    it('Cenário valido, válida um CEP de Florianópolis, capital de Santa Catarina', () => {

        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/88010290'
        })
            .then((response) => {
                expect(response.status).to.equal(200);


                expect(response.body.address).to.equal('Avenida Governador Gustavo Richard')
                expect(response.body.number).to.equal('88010290')
                expect(response.body.city).to.equal('Florianópolis')
                expect(response.body.longitude).to.equal(-48.5549223)
                expect(response.body.state).to.equal('SC')
                expect(response.body.id).to.equal('88010290-23042')
                expect(response.body.complement).to.equal('- até 899/900')
                expect(response.body.latitude).to.equal(-27.597679)
                expect(response.body.neighborhood).to.equal('Centro')
                expect(response.body.blockDelivery).to.equal(false)

            })
    });

    //CE
    it('Cenário valido, válida um CEP de Fortaleza, capital do Ceará', () => {

        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/60055040'
        })
            .then((response) => {

                expect(response.status).to.equal(200);

                expect(response.body.address).to.equal('Avenida do Forte')
                expect(response.body.number).to.equal('60055040')
                expect(response.body.city).to.equal('Fortaleza')
                expect(response.body.longitude).to.equal(-38.4823416)
                expect(response.body.state).to.equal('CE')
                expect(response.body.id).to.equal('60055040-23042')
                expect(response.body.latitude).to.equal(-3.7780815)
                expect(response.body.neighborhood).to.equal('Centro')
                expect(response.body.blockDelivery).to.equal(false)
            })

    });

    //GO
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
    });

    //PB
    it('Cenário valido, válida um CEP de João Pessoa, capital do Paraíba', () => {

        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/58013120'
        })

            .then((response) => {

                expect(response.status).to.equal(200);

                expect(response.body.address).to.equal('Avenida Almirante Barroso')
                expect(response.body.number).to.equal('58013120')
                expect(response.body.city).to.equal('João Pessoa')
                expect(response.body.longitude).to.equal(-34.8739247)
                expect(response.body.state).to.equal('PB')
                expect(response.body.id).to.equal('58013120-23042')
                expect(response.body.latitude).to.equal(-7.1201965)
                expect(response.body.neighborhood).to.equal('Centro')
                expect(response.body.blockDelivery).to.equal(false)
            })
    });

    //AP
    it('Cenário valido, válida um CEP de Macapá, capital do Amapá', () => {

        cy.request({

            method: 'GET',

            url: 'https://cep-v2-americanas-npf.b2w.io/cep/68900014'
        })
            .then((response) => {
                expect(response.status).to.equal(200);

                expect(response.body.address).to.equal('Alameda Isac Alcolumbre')
                expect(response.body.number).to.equal('68900014')
                expect(response.body.city).to.equal('Macapá')
                expect(response.body.longitude).to.equal(-51.0582734)
                expect(response.body.state).to.equal('AP')
                expect(response.body.id).to.equal('68900014-23042')
                expect(response.body.latitude).to.equal(0.0347215)
                expect(response.body.neighborhood).to.equal('Central')
                expect(response.body.blockDelivery).to.equal(false)
            })
    });

    //AL
    it('Cenário valido, válida um CEP de Maceió, Capital do Alagoas', () => {

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

    });

    //AM
    it('Cenário valido, válida um CEP de Manaus, capital do Amazonas', () => {
        cy.request({

            method: 'GET',

            url: 'https://cep-v2-americanas-npf.b2w.io/cep/69025070'
        })
            .then((response) => {

                expect(response.status).to.equal(200);


                expect(response.body.address).to.equal('Avenida Álvaro Maia')
                expect(response.body.number).to.equal('69025070')
                expect(response.body.city).to.equal('Manaus')
                expect(response.body.longitude).to.equal(-60.0159606)
                expect(response.body.state).to.equal('AM')
                expect(response.body.id).to.equal('69025070-23042')
                expect(response.body.complement).to.equal('- até 1160 - lado par')
                expect(response.body.latitude).to.equal(-3.1161123)
                expect(response.body.neighborhood).to.equal('Centro')
                expect(response.body.blockDelivery).to.equal(false)
            })
    });

    //RN
    it('Cenário valido, válida um CEP de Natal, capital do Rio Grande do Sul', () => {

        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/59070500'
        })
            .then((response) => {

                expect(response.status).to.equal(200);


                expect(response.body.address).to.equal('Avenida Rio Grande do Norte')
                expect(response.body.number).to.equal('59070500')
                expect(response.body.city).to.equal('Natal')
                expect(response.body.longitude).to.equal(-35.2380527)
                expect(response.body.state).to.equal('RN')
                expect(response.body.id).to.equal('59070500-23042')
                expect(response.body.latitude).to.equal(-5.826743599999999)
                expect(response.body.neighborhood).to.equal('Cidade da Esperança')
                expect(response.body.blockDelivery).to.equal(false)

            })
    });

    //TO
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
    });

    //RS
    it('Cenário valido, válida um CEP de Porto Alegre, capital do Rio Grande do Sul', () => {

        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/90010530'
        })
            .then((response) => {
                expect(response.status).to.equal(200);

                expect(response.body.address).to.equal('Jardim Fernando Machado')
                expect(response.body.number).to.equal('90010530')
                expect(response.body.city).to.equal('Porto Alegre')
                expect(response.body.longitude).to.equal(-51.2280599)
                expect(response.body.state).to.equal('RS')
                expect(response.body.id).to.equal('90010530-23042')
                expect(response.body.latitude).to.equal(-30.0285908)
                expect(response.body.neighborhood).to.equal('Centro Histórico')
                expect(response.body.blockDelivery).to.equal(false)
            })
    });

    //RO
    it('Cenário valido, válida um CEP de Porto Velho, capital de Rondônia', () => {

        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/76801008'
        })
            .then((response) => {
                expect(response.status).to.equal(200);

                expect(response.body.address).to.equal('Beco Coronel Carlos Mader')
                expect(response.body.number).to.equal('76801008')
                expect(response.body.city).to.equal('Porto Velho')
                expect(response.body.longitude).to.equal(-63.9094837)
                expect(response.body.state).to.equal('RO')
                expect(response.body.id).to.equal('76801008-23042')
                expect(response.body.latitude).to.equal(-8.7612962)
                expect(response.body.neighborhood).to.equal('Centro')
                expect(response.body.blockDelivery).to.equal(false)
            })
    });

    //PE
    it('Cenário Valido, Válida um CEP de Recife, capital do Pernambuco', () => {

        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/51230000'
        })
            .then((response) => {
                expect(response.status).to.equal(200);

                expect(response.body.address).to.equal('Avenida Dois Rios')
                expect(response.body.number).to.equal('51230000')
                expect(response.body.city).to.equal('Recife')
                expect(response.body.longitude).to.equal(-34.9440236)
                expect(response.body.state).to.equal('PE')
                expect(response.body.id).to.equal('51230000-23042')
                expect(response.body.latitude).to.equal(-8.1207879)
                expect(response.body.neighborhood).to.equal('Ibura')
                expect(response.body.blockDelivery).to.equal(false)
            })
    });

    //AC
    it('Cenário valido - Válida um CEP de Rio Branco, Capital do Acre', () => {



        cy.request({



            method: 'GET',


            url: 'https://cep-v2-americanas-npf.b2w.io/cep/69900013'
        })

            .then((response) => {


                expect(response.status).to.equal(200);


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
    });

    //RJ
    it('Cenário valido, válida um CEP do Rio de Janeiro', () => {

        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/20021000'
        })
            .then((response) => {
                expect(response.status).to.equal(200);

                expect(response.body.address).to.equal('Avenida Alfred Agache')
                expect(response.body.number).to.equal('20021000')
                expect(response.body.city).to.equal('Rio de Janeiro')
                expect(response.body.longitude).to.equal(-43.1705676)
                expect(response.body.state).to.equal('RJ')
                expect(response.body.id).to.equal('20021000-23042')
                expect(response.body.latitude).to.equal(-22.9048478)
                expect(response.body.neighborhood).to.equal('Centro')
                expect(response.body.blockDelivery).to.equal(false)
            })
    });

    //BA
    it('Cenario valido - Válida um CEP de Salvador, capital da Bahia', () => {


        cy.request({


            method: 'GET',


            url: 'https://cep-v2-americanas-npf.b2w.io/cep/40026280'

        })


            .then((response) => {


                expect(response.status).to.equal(200);


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

    });

    //MA
    it('Cenário valido, válida um CEP de São Luís, capital de Maranhão', () => {

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

    });

    //SP
    it('Cenário valido, válida um CEP de São Paulo', () => {

        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/01025020'
        })
            .then((response) => {

                expect(response.status).to.equal(200);

                expect(response.body.address).to.equal('Avenida do Estado')
                expect(response.body.number).to.equal('01025020')
                expect(response.body.city).to.equal('São Paulo')
                expect(response.body.longitude).to.equal(-46.6269337)
                expect(response.body.state).to.equal('SP')
                expect(response.body.id).to.equal('01025020-23042')
                expect(response.body.complement).to.equal('- de 2602 a 4400 - lado par')
                expect(response.body.latitude).to.equal(-23.5375222)
                expect(response.body.neighborhood).to.equal('Centro')
                expect(response.body.blockDelivery).to.equal(false)
            })
    });

    //PI
    it('Cenário valido, válida um CEP de Teresina, capital do Piauí', () => {

        cy.request({
            method: 'GET',

            url: 'https://cep-v2-americanas-npf.b2w.io/cep/64000200'
        })

            .then((response) => {

                expect(response.status).to.equal(200);

                expect(response.body.address).to.equal('Rua Lisandro Nogueira')
                expect(response.body.number).to.equal('64000200')
                expect(response.body.city).to.equal('Teresina')
                expect(response.body.longitude).to.equal(-42.81386579999999)
                expect(response.body.state).to.equal('PI')
                expect(response.body.id).to.equal('64000200-23042')
                expect(response.body.latitude).to.equal(-5.087029999999999)
                expect(response.body.neighborhood).to.equal('Centro')
                expect(response.body.blockDelivery).to.equal(false)
            })

    });

    //ES
    it('Cenário valido, válida um CEP de Vitória, capital do Espírito Santo', () => {

        cy.request({

            method: 'GET',

            url: 'https://cep-v2-americanas-npf.b2w.io/cep/29015040'
        })
            .then((response) => {

                expect(response.status).to.equal(200);

                expect(response.body.address).to.equal('Avenida Cleto Nunes')
                expect(response.body.number).to.equal('29015040')
                expect(response.body.city).to.equal('Vitória')
                expect(response.body.longitude).to.equal(-40.3420224)
                expect(response.body.state).to.equal('ES')
                expect(response.body.id).to.equal('29015040-23042')
                expect(response.body.latitude).to.equal(-20.3200993)
                expect(response.body.neighborhood).to.equal('Centro')
                expect(response.body.blockDelivery).to.equal(false)


            })
    })
});

