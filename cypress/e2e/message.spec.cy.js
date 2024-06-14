describe('Message form UAT', () => {
  it('Should create, update and get message by ID', () => {
    cy.visit('/');
    // When I type new message ID
    cy.get('.message-id-input').type('cypress');
    // And I type message value
    cy.get('.message-value').type('hello from cypress');
    // And I press create message button
    cy.get('.create-message-button').click();
    //Then I expect to see message value
    cy.get('.message-value').should('have.value', 'hello from cypress');

    // When I refresh the page
    cy.visit('/');
    // When I type message ID
    cy.get('.message-id-input').type('cypress');
    // And I press get button
    cy.get('.get-message-button').click();
    //Then I expect to see message value
    cy.get('.message-value').should('have.value', 'hello from cypress');
    // When I alter message value
    cy.get('.message-value').clear().type('updated message');
    // And I press update message button
    cy.get('.update-message-button').click();
    // I expect to see message value
    cy.get('.message-value').should('have.value', 'updated message');

    // When I refresh the page
    cy.visit('/');
    // When I type message ID
    cy.get('.message-id-input').type('cypress');
    // And I press get button
    cy.get('.get-message-button').click();
    //Then I expect to see message value
    cy.get('.message-value').should('have.value', 'updated message');
  })
})
