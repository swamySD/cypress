import Form from '../PageObjects/LoginPage';
import DatePickerPage from '../PageObjects/DatePicker.cy';

describe('forms', () => {

    beforeEach(() => {
        cy.visit('https://automationintesting.online/');
    });

    it('forms successfull and invalid Cases', () => {
        
        cy.fixture('FormsData.json').then((data) => {
            const form = new Form();

            
            const { successCase } = data;
            form.setUserName('[data-testid="ContactName"]',successCase.username);
            form.setEmail('[data-testid="ContactEmail"]',successCase.email);
            form.setPhoneNumber('[data-testid="ContactPhone"]',successCase.phoneNumber);
            form.setSubject('[data-testid="ContactSubject"]',successCase.subject);
            form.setMessage('[data-testid="ContactDescription"]',successCase.message);
            form.clickSubmit("#submitContact");
            form.verifyForm('div[class="col-sm-5"] div h2',successCase.usernameVerification);

            cy.screenshot('success Data');

            
            cy.reload();

           
            const { failureCase } = data;
            form.setUserName('[data-testid="ContactName"]',failureCase.username);
            form.setEmail('[data-testid="ContactEmail"]',failureCase.email);
            form.setPhoneNumber('[data-testid="ContactPhone"]',failureCase.phoneNumber);
            form.setSubject('[data-testid="ContactSubject"]',failureCase.subject);
            form.setMessage('[data-testid="ContactDescription"]',failureCase.message);
            form.clickSubmit('#submitContact');

       
            failureCase.errorMessages.forEach(eachMessage => {
                form.verifyFileds('[class="alert alert-danger"]>p',eachMessage);
            });

            cy.screenshot('Invalid Data');
        });
    });

    it('verifying iamge',()=>{
        cy.get('[class="hotel-logoUrl"]').wait(5000).should('exist').should('be.visible').should('have.attr','alt','Hotel logoUrl')
        .should(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0)
        });
    })

    it.only('Book Hotel',()=>{
        cy.fixture('FormsData.json').then((data) => {
        const form=new Form()
        const datePickerPage=new DatePickerPage()
            cy.reload()
        cy.get('.col-sm-7 > .btn').click()
        datePickerPage.selectStartDate('26');
        datePickerPage.selectIntermediateDates();
        datePickerPage.selectEndDate('31');
     

        const { successCase } = data;
        form.setUserName('[name="firstname"]',successCase.username);
        form.setEmail('[name="lastname"]',successCase.username);
        form.setPhoneNumber('[name="email"]',successCase.email);
        form.setPhoneNumber('[name="phone"]',successCase.phoneNumber);
       
        form.clickSubmit("button[class='btn btn-outline-primary float-right book-room']");
        // form.verifyForm('div[class="col-sm-5"] div h2',successCase.usernameVerification);
        
        // cy.get('.col-sm-6 > h3').should('have.text',)
        })
    })


});
