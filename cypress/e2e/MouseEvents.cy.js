import '@4tw/cypress-drag-drop';
describe('Mouse over  Events',()=>{


    it('Mouse Hover',()=>{
   
       cy.visit('https://www.zoho.com/commerce/free-demo.html')
       cy.get('[href="/commerce/templates.html#health-beauty"]').should('not.be.visible')
       cy.get('div[class="product-nav-links"] li[class="expanded dropdown zmenu-templates"] span[class="dropdown-toggle nolink"]').trigger('mouseover').click()
       cy.get('[href="/commerce/templates.html#health-beauty"]').should('be.visible')

    })

    it('right click',()=>{
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')

        // //approach one
        // cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu')
        // cy.get('.context-menu-icon-delete > span').should('be.visible')

        //apporach two 
        cy.get('.context-menu-one.btn.btn-neutral').rightclick()
        cy.get('.context-menu-icon-delete > span').should('be.visible')
    })
 

    it('dobleclick',()=>{
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
        cy.frameLoaded('#iframeResult')

        //approach -1
        // cy.iframe('#iframeResult').find('[ondblclick="myFunction()"]').trigger('dblclick')
        // cy.iframe('#iframeResult').find('[id="field2"]').should('have.value','Hello World!')

        //approach -2
        cy.iframe('#iframeResult').find('[ondblclick="myFunction()"]').dblclick()
        cy.iframe('#iframeResult').find('[id="field2"]').should('have.value','Hello World!')
        
    })  

    it('drap and drop ussing plugin',()=>{

        cy.visit('http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.get('#box6').should('be.visible')
        cy.get('#box106').should('be.visible')
        cy.get('#box6').drag('#box106',{force:true})
    })
    it.only('scrollable',()=>{
        // cy.visit('https://www.linkedin.com/feed/')
        // cy.get('#username').type("9963684670")
        // cy.get('#password').type("swamy123")
        // cy.get('.btn__primary--large').type('{enter}')

        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('india').type('{enter}')
        cy.get(':nth-child(23) > .mw-file-description > .mw-file-element').scrollIntoView({duration:2000}).should('be.visible')
        cy.get('#Politics_and_government').scrollIntoView({duration:2000}).should('have.text','Politics and government')
       
    })
    
})


