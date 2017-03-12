export const REQUEST_WINDS = 'REQUEST_POSTS'
export const RECEIVE_WINDS = 'RECEIVE_POSTS'
export const REQUEST_WEATHER = 'REQUEST_WEATHER'
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER'

const windsUrl = `https://query.yahooapis.com/v1/public/yql?q=select%20wind%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22moscow%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;
const weatherUrl = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22moscow%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'

export const receiveWeather = (json) => ({
    type: RECEIVE_WEATHER,
    weather: json.query.results.channel.item.condition
})

const requestWeather = () => ({
    type: REQUEST_WEATHER
})

export const getWeather = () => dispatch => {
    dispatch(requestWeather())

    return fetch(weatherUrl)
        .then(response => response.json())
        .then(json => dispatch(receiveWeather(json)))
}

export const receiveWinds = (json) => ({
    type: RECEIVE_WINDS,
    winds: json.query.results.channel.wind
})

const requestWinds = () => ({
    type: REQUEST_WINDS
})

export const getWinds = () => dispatch => {
    dispatch(requestWinds())

    return fetch(windsUrl)
        .then(response => response.json())
        .then(json => dispatch(receiveWinds(json)))
}