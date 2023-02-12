const { describe } = require('mocha')
const request = require ('supertest')
const { expect } = require('chai');



const testData = {
    "name": "kasir-serbaguna",
    "email": "user@example.com",
    "password": "jiasda2321@"
    
}




describe('Post Req Example', () => {
    const response = request('https://kasir-api.belajarqa.com')
        .put('/users/{userId}') //endpoint
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

