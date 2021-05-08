const mongoose = require('mongoose')
const homeItem = require('./shoppingItemSchema')

exports.getHomeItem = (request, response) => {
homeItem.find() //söker igenom min databas (Detta tar lite tid därför kör vi .then)
.then((data) => response.status(200).json(data)) 
//.then väntar och sen ger tillbaka ett svar. data är det som kommer tillbaka efter att vi väntat.
//.json kommer ge tillbaka ett objekt. Data är ett objekt så därför skriver vi json(data), kan även skriva ut objekt {...}
.catch((error) => response.status(500).json(data)) 
}

exports.getOneHomeItem = (request, response) => {
    // homeItem.findById(request.params.id) //kommer gå in i databasen och kolla igenom alla produkter tills den hittar id som matchar 
    // //döper en parameter till id. Findbyid jämför id i databasen mot det id som man skriver in.
    // .then ((oneHomeItem) => response.status(200).json(oneHomeItem))
    // .catch(error => response.status(500).json(error))
    homeItem.exists({_id: request.params.id}, (error, answer) => {
        if(error){
            return response.status(400).json(error) 
        }
        else{
            if(answer){
                homeItem.findById(request.params.id)
                .then (oneHomeItem => response.status(200).json(oneHomeItem))
                .catch(error => response.status(500).json(error))
            }
            else{
                return response.status(404).json({
                    statuscode: 400,
                    status: false,
                    message: 'The item does not exists, do a POST to database to add it'
                })
            }
        }
    })
}

exports.createHomeItem = (request, response) =>{
homeItem.exists({title: request.body.title}, (error, answer) => {
    if(error){
        return response.status(500).json(error)
    }
    else{
        if(answer){
            return response.status(400).json({
                statuscode: 400,
                status: false,
                message: 'this item already exists in database'
            })
        }

        const newHomeItem = new homeItem({
            title: request.body.title,
            description: request.body.description,
            price: request.body.price,
            image: request.body.image
        })

        newHomeItem.save() //sparar till databasen
        .then(() => {
            response.status(201).json({
                statuscode: 201,
                status: true,
                message: 'The item has been added to the database'
            })
        })
        .catch(() => {
            response.status(500).json({
                statuscode: 500,
                status: false,
                message: 'failed to add item to database'
            })
        })
    }
} )
}

exports.patchHomeItem = (request, response) => {
    homeItem.exists({_id: request.params.id}, (error, answer) => {
        if(error){
            return response.status(400).json(error)  
        }
        else{
            if(answer){
             homeItem.updateOne({_id: request.params.id}, {
                 ...request.body,
                 modified: Date.now()
             } )    //här bestämmer vi, vad är det vi vill uppdatera och hur ska det se ut?
             .then(() => {
                 response.status(200).json({
                    statuscode: 200,
                    status: true,
                    message: 'The item has been updated'

                 })
             })
             .catch(() => {
                response.status(500).json({
                    statuscode: 500,
                    status: false,
                    message: 'The item failed to be updated'

                 })
             })
            }
            else{
                return response.status(404).json({
                    statuscode: 404,
                    status: false,
                    message: 'The item that you tried to update does not exist'
                })
            }
            
        }
    })

}

exports.deleteHomeItem = (request, response) => {
    homeItem.exists({_id: request.params.id}, (error, answer) => {
        if(error){
            return response.status(400).json(error)  
        }
        else{
            if(answer) {
                homeItem.deleteOne({_id: request.params.id})
                .then(() => {
                    response.status(200).json({
                        statuscode: 200,
                        status: true,
                        message: 'The item has been deleted from database'  
                })
            })
        
            .catch(() => {
                response.status(500).json({
                        statuscode: 500,
                        status: false,
                        message: 'failed to delete item'  
                })
            })
        }
        else{
            return response.status(404).json({
                statuscode: 404,
                status: false,
                message: 'The item that you tried to update does not exist'
            })
        }
    }
}
    )} 