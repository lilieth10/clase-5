
describe('Pruebas del formulario de edades', () => {
  beforeEach(() => {
    cy.visit('http://192.168.0.187:8000/index.html');
  });

  it('Carga la página correctamente', () => {
    cy.get('#formulario-edades').should('exist');
    cy.get('#calcular-edades').should('exist');
  });

  it('Calcula las edades correctamente', () => {
    cy.get('.integrante-1').type('30');
    cy.get('.integrante-2').type('40');
    cy.get('.integrante-3').type('25');
    cy.get('#calcular-edades').click();
    cy.get('.mayor-edad').should('have.value', '40');
    cy.get('.menor-edad').should('have.value', '25');
    cy.get('.promedio-edad').should('have.value', '31.666666666666668'); // Verifica el promedio también
  });

  it('Muestra resultados solo después de hacer clic en "calcular"', () => {
    cy.get('#resultados-edades').should('not.be.visible');
    cy.get('.integrante-1').type('30');
    cy.get('.integrante-2').type('40');
    cy.get('.integrante-3').type('25');
    cy.get('.mayor-edad').should('not.have.value');
    cy.get('#calcular-edades').click();
    cy.get('#resultados-edades').should('be.visible');
  });
});