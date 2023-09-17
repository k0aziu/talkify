describe("Strona 404", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/jand", { failOnStatusCode: false });
  });

  it("Back button", () => {
    cy.get(".img-nav-back").click();
    cy.url().should("eq", 'http://localhost:3000/')
  })

  it("Powinien otwierać link do GitHuba w nowej karcie", () => {
    cy.get("a[href='https://github.com/koziuu']").should("have.attr", "target", "_blank");
    cy.get("a[href='https://github.com/koziuu'] img[src='images/github.svg']").should("exist");
  });

  it("Powinien otwierać link do Discorda w nowej karcie", () => {
    cy.get("a[href='https://discord.com/users/725816686296432761']").should("have.attr", "target", "_blank");
    cy.get("a[href='https://discord.com/users/725816686296432761'] img[src='images/discord.svg']").should("exist");
  });
});
