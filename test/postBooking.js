const { describe } = require('mocha')
const request = require ('supertest')
const { expect } = require('chai');

const testData = {
    "id" : "1234",
    "Username" : "Jim",
    "firstName" : "Brown",
    "lastName" : "Uswa",
    "email" : "emial@yopmail.com",
    "password":"2564542",
    "phone" : "0857636636",
    "userStatus" : 1
    
}




describe('Post Req Example', () => {
    const response = request('https://petstore.swagger.io/v2')
        .post('/user') //endpoint
        .send (testData)
    it('response status is 200', async()=>{
        expect((await response).status).to.equal(200)
        // console.log((await response).status)
        // console.log((await response).body)
    })
    it('message is equal to ID', async()=>{
        expect((await response).body.message).to.equal(testData.id)
        // console.log((await response).status)
        // console.log((await response).body)
    })
})

