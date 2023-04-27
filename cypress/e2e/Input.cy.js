describe("Test check if country will output information ", () => {
  it("", () => {
    cy.visit("http://localhost:3000/");
    cy.get('input[type="text"]').click().type("Ireland");
    cy.get('button[type="submit"]').click();
  });
});
