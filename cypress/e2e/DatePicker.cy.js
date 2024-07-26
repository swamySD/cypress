describe('booking', () => {
    it('date', () => {
        cy.visit('https://automationintesting.online/');
        cy.get('.col-sm-7 > .btn').click();

        // Start date
        cy.get(':nth-child(5) > .rbc-row-content > .rbc-row > :nth-child(6)')
            .contains('26')
            .trigger('mousedown', { which: 1 }).trigger('mousemove')

        // Intermediate date
        cy.get(':nth-child(5) > .rbc-row-content > .rbc-row > :nth-child(7)')
            .contains('27')
            .trigger('mousemove');

        cy.get(':nth-child(6) > .rbc-row-content > .rbc-row > :nth-child(1)')
            .contains('28')
            .trigger('mousemove');

        cy.get(':nth-child(6) > .rbc-row-content > .rbc-row > :nth-child(2)')
            .contains('29')
            .trigger('mousemove');

        cy.get(':nth-child(6) > .rbc-row-content > .rbc-row > :nth-child(3)')
            .contains('30')
            .trigger('mousemove');

        // End date
        cy.get(':nth-child(6) > .rbc-row-content > .rbc-row > :nth-child(4)')
            .contains('31')
            .trigger('mouseup', { force: true });

        // Verification of selection
        // Add assertions here to verify the range is selected correctly.
    });
});
