describe("Test to check if will show error message ", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    cy.get('input[type="text"]').click().type("Benjamin");
    cy.get('button[type="submit"]').click();
  });
});
