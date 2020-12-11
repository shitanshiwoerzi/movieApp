let personId = null
let person;
describe("Person Details Page", () => {
    before(() => {
        cy.request(
            `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
              "TMDB_KEY"
            )}&language=en-US&include_adult=false&include_video=false&page=1`
          )
          .its("body")
          .then((response) => {
            console.log(response.results[1].id);
            return response.results[1].id;
          })
        .then((arbitraryPersonIdignored) => {
            personId = arbitraryPersonIdignored
            return cy
              .request(
                `https://api.themoviedb.org/3/person/${personId}?api_key=${Cypress.env(
                  "TMDB_KEY"
                )}`
              )
              .its("body");
          })
          .then((personDetails) => {
            person = personDetails;
            return personDetails.id;
          })
        });
beforeEach(() => {
    cy.visit(`/`);
    cy.get("button").eq(2).click();
    cy.get(".col-sm-3").eq(1).find("img").click();
  });
  it("should display person name in the page header", () => {
    cy.get("h2").contains(person.name);
  });
  it("should display the person's details", () => {
    cy.get("h4").contains("Biography");
    cy.get("h3").contains("Personal Info");
    cy.get("p").contains(person.place_of_birth);
    cy.get("li").contains(person.also_known_as[0]);

  });
  it("should display the person poster & Known for posters" ,()=> {
    cy.get("img").eq(1).should("have.attr","src");
});
});