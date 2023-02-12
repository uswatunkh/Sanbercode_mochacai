const { describe } = require('mocha')
const request = require ('supertest')
const { expect } = require('chai');

const testData = {
    "id" : "12367",
    "Username" : "Ji",
    "firstName" : "Brow",
    "lastName" : "Usw",
    "email" : "emal@yopmail.com",
    "password":"254542",
    "phone" : "085766636",
    "userStatus" : 1
    
}




describe('Post Req Example', () => {
    const response = request('https://petstore.swagger.io/v2')
        .put('/user') //endpoint
        .send (testData)
    it('response status is 200', async()=>{
        expect((await response).status)
        // console.log((await response).status)
        // console.log((await response).body)
    })
    // it('message is equal to ID', async()=>{
    //     expect((await response).body.message)
    //     // console.log((await response).status)
    //     // console.log((await response).body)
    // })
})

