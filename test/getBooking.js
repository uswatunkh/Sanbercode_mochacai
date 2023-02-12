const { describe } = require('mocha')
const request = require ('supertest')
const { expect } = require('chai');

const baseUrl = 'http://restful-booker.herokuapp.com'

describe('App', function(){
    //Assert tulisan sesuai ekspektasi
    it('app should return welcome message', function(){
        let response = "welcome to QA course at sanber";
    })
})

// describe('Get Booking All', function(){
//     //Assert tulisan sesuai ekspektasi
//     it('response status is 200', async()=>{
//         const response = request(baseUrl)
//         .get('/booking') //endpoint
//         console.log((await response).status)
//         console.log((await response).body)
//     })
// })

describe('Chai assert  Pet Store', () => {
    const response = request('https://petstore.swagger.io/v2')
        .get('/store/inventory') //endpoint
    it('response status is 200', async()=>{
        expect((await response).status).to.equal(200)
        // console.log((await response).status)
        // const { expect } = require('chai');
    })
})

