const request = require ('supertest')
const { expect } = require('chai');
const { describe } = require('mocha')

module.export = function auth(){
    const response = request ('https://kasir-api.belajarqa.com')
    .post('/authentications')
    .send({
        "email": "Brown@yopmail.com",
        "password" : "Uswa123"
    })
    // it('response status is 200', async()=>{
    //     expect((await response).status)
    //      console.log((await response).status)
    //      console.log((await response).body)
    // })

    

    token = response.body.data.accessToken
    return token
}

describe('Login', () => {
    const response = request('https://kasir-api.belajarqa.com')
        .post('/authentications') //endpoint
        //.send (testData)
    it('response status is 200', async()=>{
        expect((await response).status)
        // console.log((await response).status)
        // console.log((await response).body)
    })
    
})