// cypress/pageObjects/DatePickerPage.js

class DatePickerPage {
  

    selectStartDate(date) {
        cy.get(':nth-child(5) > .rbc-row-content > .rbc-row > :nth-child(6)')
            .contains(date)
            .trigger('mousedown', { which: 1 })
            .trigger('mousemove');
    }

    selectIntermediateDates() {
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
    }

    selectEndDate(date) {
        cy.get(':nth-child(6) > .rbc-row-content > .rbc-row > :nth-child(4)')
            .contains(date)
            .trigger('mouseup', { force: true });
    }

   
}

export default DatePickerPage;
