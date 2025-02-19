describe('Pagina de Cadastro', () => {
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-tau.vercel.app/')
    cy.get('[href="/cadastro"]').click()
    cy.cadastrar('Nicole Macedo', 'nicolemacedo@gmail.com', '123456Mm')
  })
})
