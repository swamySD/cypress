describe('HTTP Requests',()=>{

    it('GET Call',()=>{
        cy.request('GET','https://jsonplaceholder.typicode.com/posts/1').
        its('status').should('equal',200)
    })
    it('Post call',()=>{

        cy.request({
            method:'POST',
            url:'https://jsonplaceholder.typicode.com/posts/',
            body:{
                title: "foo",
                body: "bar",
                userId: 1,
                
            }
        }).its('status').should('equal',201)
    })

    it('PUT call',()=>{
        cy.request({
            method:'PUT',
            url:'https://jsonplaceholder.typicode.com/posts/1',
            body:{
                title:'function',
                body:'This is put request',
                userId:1,
                id:1
            }
        }).its('status').should('equal',200)
    })

    it('DELETE CALL',()=>{
        cy.request({
            method:'DELETE',
            url:'https://jsonplaceholder.typicode.com/posts/1'
        }).its('status').should('equal',201)
    })


})