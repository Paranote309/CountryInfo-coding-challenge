describe("Testing if page loads", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
  });
});
