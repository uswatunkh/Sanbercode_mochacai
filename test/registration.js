const { describe } = require('mocha')
const request = require ('supertest')
const { expect } = require('chai');

const baseUrl = 'https://kasir-api.belajarqa.com'

const testData = {
    "name" : "Jimuswa",
    "email" : "Brown@yopmail.com",
    "password" : "Uswa123",
    
    
}




describe('Post Req Example', () => {
    const response = request(baseUrl)
        .post('/registration') //endpoint
        .send (testData)
    it('response status is 200', async()=>{
        expect((await response).status)
        // console.log((await response).status)
        // console.log((await response).body)
    })
    // it('message is equal to ID', async()=>{
    //     expect((await response).body.message).to.equal(testData.id)
    //     // console.log((await response).status)
    //     // console.log((await response).body)
    // })
})

