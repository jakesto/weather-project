const request = require('request')
const forecast = (latitude, longitude, callback) => {
    url = 'https://api.darksky.net/forecast/2c9fc283a0a06a70588b7ac5c7761a94/' + latitude + ',' + longitude
        request({url: url, json: true}, (error, { body }) =>{
        if(error){
            callback('Unable to connect to weather service.', undefined)
        } else if (body.error){
            callback('Cannot find location, please try again.', undefined)
        }else{
            callback (undefined,
            body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees. There is a ' +body.currently.precipProbability+ '% chance of rain.'

            )
        }
    })


}

module.exports = forecast

