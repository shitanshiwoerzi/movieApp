let personId = null
let person;
let reviews;
describe("Person Details Page", () => {
    before(() => {
        cy.request(
            `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
              "TMDB_KEY"
            )}&language=en-US&include_adult=false&include_video=false&page=1`
          )
          .its("body")
          .then((response) => {
            return response.results[2].id;
          })
        .then((arbitraryPersonIdignored) => {
            personId = arbitraryPersonIdignored
            return cy
              .request(
                `https://api.themoviedb.org/3/movie/${personId}?api_key=${Cypress.env(
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
    cy.get(".col-sm-3").eq(2).find("img").click();
  });
  it("should display person name in the page header", () => {
    cy.get("h2").contains(movie.name);
  });
  it("should display the movie's details", () => {
    cy.get("h4").contains("Biography");
    cy.get("h4").next().contains(person.biography);
    cy.get("h3").contains("Personal Info");
    cy.get("p").contains(person.place_of_birth);
    cy.get("ul").eq(0).contains(person.also_know_as);

  });
  it("should display the person poster" ,()=> {
    cy.get("img").should("have.attr","src")
});
});