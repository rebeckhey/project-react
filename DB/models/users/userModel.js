// const { request } = require('express')
const mongoose = require ('mongoose')
const user = require ('../users/userSchema')
const bcrypt = require ('bcrypt')
const auth = require ('../../authentication/auth')

exports.createUser = (request, response) => {

    user.exists({emailadress: request.body.emailadress}, (error, answer) => {
        if(error){
            return response.status(400).json(error)
        }
        else{
            if(answer){
                return response.status(400).json({
                    statuscode: 400,
                    status: false,
                    message: 'The emailadress already exist'  
                })
            }

            else{

                const saltPassword = bcrypt.genSaltSync(10) //görs för att salta lösenordet. lösenordet krypteras 10 är default
                bcrypt.hash(request.body.password, saltPassword, (error, hash) => {
                    if(error) {
                        return response.status(500).json({
                            statuscode: 500,
                            status: false,
                            message: 'password could not be encrypted, error occured'
                        })
                    }
               
                const newUser = new user({
                    firstname: request.body.firstname,
                    lastname: request.body.lastname,
                    emailadress: request.body.emailadress,
                    
                    passwordHash: hash

                })
                newUser.save() //gör att användaren sparas i databasen
                .then(() => { // det tar lite tid, då gör man .then
                    response.status(201).json({ //201 (created)
                        statuscode: 201,
                        status: true,
                        message: 'user has been created and saved to database'
                    })
                })
                .catch(() => {
                    response.status(500).json({
                        statuscode: 500,
                            status: false,
                            message: 'user could not be created'
                    })
                })
            })
            }
        }
    })
}

exports.login = (request, response) => {
    user.findOne({emailadress: request.body.emailadress})
    .then(oneUser => {
        if(oneUser === null){ //om det är null så betyder det att det inte finns någon användare
        return response.status(404).json({
            statuscode: 404,
            status: false,
            message: 'The password or email is incorrect'
        })
        } 

        try{
            bcrypt.compare(request.body.password, oneUser.passwordHash, (error, answer) => { //jämför med request och hash
                if(error){
                    return response.status(400).json(error)
                }
                else{
                    if(answer){
                        return response.status(200).json({
                            statuscode: 200,
                            status: true,
                            message: 'login was successful',
                            token: auth.token(oneUser._id)
                        })
                    }
                    return response.status(401).json({
                        statuscode: 401,
                        status: false,
                        message: 'The password or email is incorrect'
                    })
                }
            }) 
        } 
           catch {
            return response.status(500).json({
                statuscode: 500,
                status: false,
                message: 'The user cannot be authenticated'
            })

           }
       
 
    })
}