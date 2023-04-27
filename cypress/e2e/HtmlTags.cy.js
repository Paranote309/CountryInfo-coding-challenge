describe("Test to check if it denies tag scripts ", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    cy.get('input[type="text"]').click().type("<h1></h1>");
    cy.get('button[type="submit"]').click();
  });
});
