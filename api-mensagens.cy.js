
describe('Api Adopet', () => {


    it('Mensagens da API', () => {
        cy.request({
            method: 'GET' ,
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/5db45ad7-d997-4307-979c-4a22959b202f',
            headers: Cypress.env()

        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })

    })

})
