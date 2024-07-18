// cy.get('button')
// cy.get('.btn-primary')

// //we can select an element by tagname, using dot we can select className ,using #id 
// //we can select by attribute name like qutions inside [attributename="submit"]

// //combining css selectors 
// //combine different selectors to be more specific
// cy.get('.button.btn-primary')
// //descendant selector 

// //selects elements that are descendants of another element 
// //selects elements that are descendants of another element

// cy.get('form input')

// //we can slect direct child elements of an element 

// ccy.get('ul >li')
// //select pseudo-classes 

// //we can use li:first-child
// cy.get('input:checked')
// cy.get('li:first-child')

// //for selecting whose attribute contains a specific value.
// cy.get('a[href*="login"]')

// cy.get('a[href*="login"]')

// //starts elements whose attributes starts with and ends with
// cy.get('input[name^="user"]')
// cy.get('input[name$="name"]')

// //attribute and class combinations

// //combine attribute and classes for precise targeting

cy.get('input[type="text"].form-control')
