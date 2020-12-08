const { Button } = require("antd");

let people; // List of people from TMDB


describe("Person Page" , () => {
    before(() => {
        // Get people from TMDB and store in people variable.
        cy.request(
          `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
            "TMDB_KEY"
          )}&language=en-US&page=1`
        )
          .its("body")    // Take the body of HTTP response from TMDB
          .then((response) => {
            people = response.results
          })
      })
      beforeEach(() => {
        cy.visit("/")
      });

      describe("Base Tests", ()=> {
          it("Display the page header", ()=>{
            cy.get("button").eq(2).click();
            cy.get("h2").contains("Popular People");
          
          });
          it("Display the person cards", ()=>{
            cy.get("button").eq(2).click();
            cy.get(".card").eq(1).contains("Anya Taylor-Joy");
          })
      });

});

