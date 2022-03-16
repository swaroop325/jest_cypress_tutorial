describe("first E2e test", () => {
  it("starts", () => {
    cy.visit("http://localhost:3000/");
    cy.get("[data-testid=todo-1]").click();
    cy.get("[data-testid=todo-2]").click();
  });
});
