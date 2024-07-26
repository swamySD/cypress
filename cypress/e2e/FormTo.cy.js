describe('Automation Practice Form', () => {


    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false;
      });

    beforeEach(() => {
      cy.visit('https://demoqa.com/automation-practice-form');
    });
  
    it('should fill and submit the form successfully', () => {
      // Fill in the First Name
      cy.get('#firstName').type('John');
  
      // Fill in the Last Name
      cy.get('#lastName').type('Doe');
  
      // Fill in the Email
      cy.get('#userEmail').type('john.doe@example.com');
  
      // Select Gender
      cy.get('input[name="gender"][value="Male"]').check({ force: true });
  
      // Fill in the Mobile Number
      cy.get('#userNumber').type('1234567890');
  
      // Set Date of Birth
      cy.get('#dateOfBirthInput').click();
      cy.get('.react-datepicker__month-select').select('April');
      cy.get('.react-datepicker__year-select').select('1990');
      cy.get('.react-datepicker__day--010').click();
  
      // Select Subjects
      cy.get('#subjectsInput').type('Maths{enter}');
  
      // Select Hobbies
      cy.get('input[name="hobbies"][value="Sports"]').check({ force: true });
  
      // Upload a Picture
      cy.get('#uploadPicture').attachFile('path/to/your/picture.jpg');
  
      // Fill in the Current Address
      cy.get('#currentAddress').type('123 Cypress Street, Test City');
  
      // Select State and City
      cy.get('#state').click().get('.css-26l3qy-menu').contains('NCR').click();
      cy.get('#city').click().get('.css-26l3qy-menu').contains('Delhi').click();
  
      // Submit the form
      cy.get('#submit').click();
  
      // Assert that the form was submitted
      cy.get('.modal-content').should('be.visible');
      cy.get('#example-modal-sizes-title-lg').should('have.text', 'Thanks for submitting the form');
    });
  
    it('should show validation messages for required fields', () => {
      // Attempt to submit the form without filling any fields
      cy.get('#submit').click();
  
      // Check for validation messages
      cy.get('#firstName').should('have.class', 'is-invalid');
      cy.get('#lastName').should('have.class', 'is-invalid');
      cy.get('#userEmail').should('have.class', 'is-invalid');
      cy.get('#genterWrapper').should('have.class', 'is-invalid');
      cy.get('#userNumber').should('have.class', 'is-invalid');
      cy.get('#dateOfBirth').should('have.class', 'is-invalid');
      cy.get('#subjectsWrapper').should('have.class', 'is-invalid');
      cy.get('#hobbiesWrapper').should('have.class', 'is-invalid');
    });
  
    it('should allow to upload a picture', () => {
      cy.get('#uploadPicture').attachFile('path/to/your/picture.jpg');
      cy.get('#uploadPicture').should('have.value', 'path/to/your/picture.jpg');
    });
  
    it('should allow to select multiple subjects', () => {
      cy.get('#subjectsInput').type('Maths{enter}');
      cy.get('#subjectsInput').type('Physics{enter}');
      cy.get('#subjectsInput').type('Chemistry{enter}');
      cy.get('.subjects-auto-complete__multi-value').should('have.length', 3);
    });
  
    it('should allow to select multiple hobbies', () => {
      cy.get('input[name="hobbies"][value="Sports"]').check({ force: true });
      cy.get('input[name="hobbies"][value="Reading"]').check({ force: true });
      cy.get('input[name="hobbies"][value="Music"]').check({ force: true });
      cy.get('input[name="hobbies"][value="Sports"]').should('be.checked');
      cy.get('input[name="hobbies"][value="Reading"]').should('be.checked');
      cy.get('input[name="hobbies"][value="Music"]').should('be.checked');
    });
  
  });
  