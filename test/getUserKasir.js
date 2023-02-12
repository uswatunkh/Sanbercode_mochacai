const { describe } = require('mocha')
const request = require ('supertest')
const { expect } = require('chai');

// let response = request ('https://kasir-api.belajarqa.com')
// .post('/authentications')
// .send({
//     "email": "sample@example.com",
//         "password" : "123adsfadf@"

// })

// console.log(response)

//  const token = response.body.accessToken


describe('Get Booking All', function(){
    //Assert tulisan sesuai ekspektasi
    it('response status is 200', async()=>{
        const response = request('https://kasir-api.belajarqa.com')
        .get('/users') //endpoint
        console.log((await response).status)
        console.log((await response).body)
    })
})

describe('Get User', () => {
    const response = request('https://kasir-api.belajarqa.com')
        .get('/users') //endpoint
        //.set({'Authorization' : token}) //endpoint
    it('response status is 200', async()=>{
        expect((await response).status)
        // console.log((await response).status)
        // console.log((await response).body)
    })
})

