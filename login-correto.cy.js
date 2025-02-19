describe('Pagina de Cadastro', () => {
 beforeEach (() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('[href="/login"]').click()
 })

  it.only('Deve preencher os campos de login corretamente e autenticar o usuário na página', () => {
    cy.login('nicolemacedo@gmail.com', '123456Nm')
    
    
  })
})
