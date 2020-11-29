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
            cy.get("h2").contains("Popular People");
            cy.get(".badge").contains(20);
          });
          it("Display the person cards", ()=>{
              cy.get(".card").should("have length", people.length);
          })
      });

});

