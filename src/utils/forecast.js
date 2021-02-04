const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4f8c4fcff806b87401aa1f973a3d6ec8&query=' + latitude + ',' + longitude + '&units=f'
    request({ url, json:true }, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather services!', undefined)
        } else if(body.error) {
            callback('Unable to find location! Try another search.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.' + ' The wind speed is ' + body.current.wind_speed  + "mph. The humidity is " + body.current.humidity + '%.')
        }
    })


}


module.exports = forecast