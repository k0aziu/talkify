describe("Strona Random chat", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/random");
  });

  it("Powinien przekierować na stronę główną po kliknięciu przycisku 'Back'", () => {
    cy.get(".back-home").click(); // Klika w przycisk "Back"
    cy.url().should("eq", "/"); // Sprawdza, czy przekierowano na stronę główną
  });

  it("Powinien wysyłać wiadomość po kliknięciu przycisku 'Wyślij'", () => {
    cy.get("#messageInput").type("Przykładowa wiadomość"); // Wpisuje wiadomość w pole tekstowe
    cy.get(".send-button").click(); // Klika w przycisk "Wyślij"
  });

  it("Powinien zgłaszać rozmówcę po kliknięciu przycisku 'Zgłoś'", () => {
    cy.get(".report-button").click();
  });

  it("Powinien wyciszać powiadomienia po kliknięciu przycisku 'Wycisz'", () => {
    cy.get(".mute-button").click(); // Klika w przycisk "Wycisz"
  });

  it("Powinien dodawać załącznik w postaci zdjęcia po kliknięciu przycisku 'Dodaj zdjęcie'", () => {
    cy.get(".add-photo-button").attachFile("sciezka-do-pliku-zdjecia.jpg");
  });

  it("Powinien wyświetlać historię chatu", () => {
    cy.get(".chat-box").should("exist");
  });
});
