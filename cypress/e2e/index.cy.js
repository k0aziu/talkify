describe("Nawigacja na stronie", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/");
  });

  it("Powinien przenosić na stronę Losowego Chatu", () => {
    cy.contains("Losowy Chat").click();
    cy.url().should("include", "/random");
  });

  it("Powinien przenosić na stronę Pokojów Tematycznych", () => {
    cy.contains("Pokoje Tematyczne").click();
    cy.url().should("include", "/rooms");
  });

  it("Powinien przenosić na stronę Własnych Pokojów z losowymi znakami w URL", () => {
    cy.contains("Własne Pokoje").click();
    cy.url().should("match", /\/room-[a-zA-Z0-9]+$/);
  });

  it("Powinien otwierać link do GitHuba w nowej karcie", () => {
    cy.get("a[href='https://github.com/koziuu']").should("have.attr", "target", "_blank");
    cy.get("a[href='https://github.com/koziuu'] img[src='images/github.svg']").should("exist");
  });

  it("Powinien otwierać link do Discorda w nowej karcie", () => {
    cy.get("a[href='https://discord.com/users/725816686296432761']").should("have.attr", "target", "_blank");
    cy.get("a[href='https://discord.com/users/725816686296432761'] img[src='images/discord.svg']").should("exist");
  });
});
