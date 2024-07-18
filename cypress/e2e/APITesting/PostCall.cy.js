


describe('api testing',()=>{


it('approach-1 Hard coded json object',()=>{
    const requestBody= {
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
    }
    cy.request({
            method:"POST",
            url:'https://fakestoreapi.com/products',
            body:requestBody
               }).then((response)=>{
                expect(response.status).to.eq(200)
                expect(response.body.title).to.eq('test product')
                expect(response.body.price).to.eq(13.5)
                expect(response.body.description).to.eq('lorem ipsum set')
                expect(response.body.category).to.eq('electronic')
               })
})


it('approach-2 Dynamically operating json object',()=>{

    const requestBody={
        title:Math.random().toString(5).substring(2),
        price:Math.random()*100,
        description:Math.random().toString(9).substring(4),
         image: 'https://i.pravatar.cc',
        category: 'electronic'
    }

    cy.request({
        method:'POST',
        url:'https://fakestoreapi.com/products',
        body:requestBody
    }).then((response)=>{
        expect(response.body.title).to.eq(requestBody.title)
        expect(response.body.price).to.eq(requestBody.price)
        expect(response.body.description).to.eq(requestBody.description)
        expect(response.body.image).to.eq(requestBody.image)
        expect(response.body.category).to.eq(requestBody.category)
    })
})

it.only('approach-3 fixture',()=>{
    cy.fixture('products').then((data)=>{
        const requestBody=data
        cy.request({
            method:'POST',
            url:'https://fakestoreapi.com/products',
            body:requestBody
        }).then((response)=>{
            expect(response.body.title).to.eq(requestBody.title)
            expect(response.body.price).to.eq(requestBody.price)
            expect(response.body.description).to.eq(requestBody.description)
            expect(response.body.image).to.eq(requestBody.image)
            expect(response.body.category).to.eq(requestBody.category)
            expect(response.body).has.property('title',requestBody.title)
            expect(response.body).to.have.property('description', requestBody.description)
        })

    })
})


})
