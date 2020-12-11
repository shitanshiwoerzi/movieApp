describe("Login page", () => {

    beforeEach(() => {
        cy.visit(`/`)
      });

      describe("Base Tests", ()=> {
        it("Display the login form", ()=>{
          cy.get("button").eq(0).click();
          cy.get("h1").contains("Log In");
          cy.get("input").should("have.value","");
          cy.get("button").eq(4).contains("Log in");
        });
        it("Display the sign up form", ()=>{
          cy.get("button").eq(0).click();
          cy.get("h1").contains("Sign up");
          cy.get("button").eq(5).contains("Sign Up");
        });
      });

      describe("User authentication ", ()=>{
        it("login success", ()=>{
        cy.get("button").eq(0).click();
        cy.get("input[name=email]").eq(0).type("20091593@mail.wit.ie").should("have.value","20091593@mail.wit.ie");
        cy.get("input[name=password]").eq(0).type("123456").should("have.value","123456");
        cy.get('form').eq(0).submit();
        cy.get("button").eq(4).click();
        cy.url().should('include', '/signout')
        });
        it("show the no email alert", ()=>{
          cy.get("button").eq(0).click();
          cy.get("input[name=password]").eq(0).type("123456").should("have.value","123456");
          cy.get('form').eq(0).submit();
        });
        it("show the no password alert", ()=>{
          cy.get("button").eq(0).click();
          cy.get("input[name=email]").eq(0).type("20091593@mail.wit.ie").should("have.value","20091593@mail.wit.ie");
          cy.get('form').eq(0).submit();
        });
        it("show the wrong email alert", ()=>{
          cy.get("button").eq(0).click();
          cy.get("input[name=email]").eq(0).type("xxxx@mail.wit.ie");
          cy.get('form').eq(0).submit();
        });
        it("show the wrong password alert", ()=>{
          cy.get("button").eq(0).click();
          cy.get("input[name=password]").eq(0).type("111");
          cy.get('form').eq(0).submit();
          cy.get('svg').should("have.attr", "style");
        });

      });
});