

describe('API testing',()=>{
    it('Passing QueryParameters',()=>{

    cy.request({
        method:'GET',
        url:'https://reqres.in/api/users',
        qs:{page:2}
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.status).equal(200)
        expect(response.body.page).equal(2)
        expect(response.body['per_page']).equal(6)
        expect(response.body.total).equal(12)
        expect(response.body.data).has.length(6)
        expect(response.body.data[0]).have.property("first_name","Michael")
        expect(response.body.data[0]).have.property("id",7)

    })
    
    })
})