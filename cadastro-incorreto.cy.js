describe('Pagina de Cadastro', () => {
  it('Preencher os campos do fomulário incorretamente e exibir mensagens ao usuário', () => {
    cy.visit('https://adopet-tau.vercel.app/')
    cy.get('[href="/cadastro"]').click()  
    cy.get('button').click();
    cy.contains('É necessário informar seu nome').should('be.visible');
    cy.contains('É necessário informar um endereço de email').should('be.visible');
    cy.contains('Crie uma senha').should('be.visible');
    cy.contains('Repita a senha criada acima').should('be.visible');

  })
})
