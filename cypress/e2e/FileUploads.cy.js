import 'cypress-file-upload'

describe('file uploads',()=>{


    it('single file upload',()=>{
        // cy.visit('https://www.ilovepdf.com/')
        // cy.get('.tools__container > :nth-child(4) > a').click()
        // cy.get('#pickfiles').click().attachFile('docker.pdf')
        cy.visit('https://ps.uci.edu/~franklin/doc/file_upload.html')
        cy.get('[name="userfile"]').click().attachFile('docker.pdf')
    })

    
    it('single file upload with rename',()=>{
      
        cy.visit('https://ps.uci.edu/~franklin/doc/file_upload.html')
        cy.get('[name="userfile"]').click().attachFile({filePath:'docker.pdf',fileName:'Myfile.pdf'})
    })


    it('drag and drop',()=>{
        // cy.visit('https://www.ilovepdf.com/pdf_to_word')
        // cy.get('#workArea').attachFile('docker.pdf',{subjectType:'drag-n-drop'})
        //  cy.get('#pickfiles').click().attachFile('docker.pdf')
        cy.visit('https://www.dragdrop.com/test/')
        cy.get('#demo-upload').attachFile('docker.pdf',{subjectType:'drag-n-drop'})
        cy.wait(5000)
        cy.get('.dz-filename > span').should('have.text','docker.pdf')
    })

    it('Multiple file upload',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
     
        cy.get('#filesToUpload').attachFile(["dd-sample-photos-data.pdf","The-Yellow-Wall-Paper_compressed.pdf"])
        cy.get(':nth-child(6) > strong').should('contain.text','Files You Selected:')
        cy.get(':fileList>:nth-child(1)').should('contain.text','dd-sample-photos-data.pdf')
        cy.get(':fileList>:nth-child(2)').should('contain.text','The-Yellow-Wall-Paper_compressed.pdf')
        cy.get('#fileList > li').should('have.length',2)

        // cy.visit('https://www.igniteui.com/file-upload/multiple-upload')
        // cy.get('#igUpload1_ibb').attachFile(["dd-sample-photos-data.pdf","The-Yellow-Wall-Paper_compressed.pdf"])
    })
    it.only('shadow dom',()=>{
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile('docker.pdf')
        cy.get('.smart-item-name',{includeShadowDom:true}).should('contain.text','docker.pdf')
    })



})