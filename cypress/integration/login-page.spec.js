describe("Login page", () => {
    beforeEach(() => {
        cy.visit(`/`)
      });

    it("should input username", () =>{
        cy.contains('Login').eq(0).click();
        cy.get('input').eq(0).type('admin')
              .should('have.value', 'admin')       
    });
    it("should input passward", () =>{
        cy.contains('Login').eq(0).click();
        cy.get('input').eq(1).type('******')
        .should('have.value', '******')   
    });
    it("should login success", () => {
        cy.contains('Login').eq(0).click();
        cy.contains("Login").click();
        cy.url().should("include", `/`);
    });
});