describe('Headers',()=>{
   let authToken=null;
   before('Creating access token',()=>{
    cy.request({
        method:'POST',
        url:'https://simple-books-api.glitch.me/api-clients/',
        headers:{
            'Content-Type':'application/json'
        },
        body:{
            'clientName':"Testa",
            "clientEmail":Math.random().toString(5).substring(2)+"@gmail.com"
        }
    }).then((response)=>{
        authToken=response.body.accessToken
    })
   })

  
   before('creating new order',()=>{
    cy.request({
        method:'POST',
        url:'https://simple-books-api.glitch.me/orders/',
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+authToken
        },
        body:{
            "bookId":1,
            "customerName":"xyzabc"
        }
    }).then((response)=>{
        expect(response.status).to.eq(201)
        expect(response.body.created).equal(true)
    })
   })

   it('Fetching tech orders',()=>{
    cy.request({
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer '+authToken
        },
        cookies:{
            'cookieName':'mycookie'
        }
    })
   })

    // it('rec',()=>{

    // })
})