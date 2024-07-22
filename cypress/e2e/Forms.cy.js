import Login from "../PageObjects/LoginPage"
describe('forms',()=>{


    it('forms',()=>{
        cy.visit('https://automationintesting.online/')
        const login=new Login()
        login.setUserName('kumarswamy')
        login.setEmail('swamy@gmail.com')
        login.setPhoneNumber('99636846701')
        login.setSubject('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
        login.setMessage(' Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
        login.clickSubmit()
        login.verifyLogin('kumarswamy')
        cy.screenshot('success Data')
        cy.reload()
        login.setUserName('kumarswamy')
        login.setEmail('swamy@gmail.com')
        login.setPhoneNumber('9888')
        login.setSubject('frr')
        login.setMessage('yeerr')
        login.clickSubmit()
        login.verifyFileds('Phone must be between 11 and 21 characters.')
        login.verifyFileds('Subject must be between 5 and 100 characters.')
        login.verifyFileds('Message must be between 20 and 2000 characters.') 
        cy.screenshot('Invalid Data')
    })
})

