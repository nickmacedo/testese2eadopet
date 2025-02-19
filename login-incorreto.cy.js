describe('Pagina de Cadastro', () => {
 beforeEach (() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app')
    cy.get('[href="/login"]').click()
     cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', { 
      statusCode:400,
  }).as('stubPost') 
 })


  it('Deve preencher os campos de login corretamente e autenticar o usuário na página', () => {
    cy.login('nicolemacedogmail.com','123456Nm' )
    cy.contains('Por favor, verifique o email digitado').should('be.visible');
   
  })


it('deve falhar mesmo que os campos preenchidos corretamente', () => {
  cy.login('nicolemacedo@gmail.com', '123456Nm')
  cy.wait('@stubPost')
  cy.contains('Falha no login. Consulte suas credenciais').should('be.visible');
})

})
