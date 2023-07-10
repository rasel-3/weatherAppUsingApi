const OPEN_WEATHER_API_KEY = '138ba91226c444e03f382ec54b66fa68'

let lat = 30;
let lon = 90;
let exclude = 'current'
let unit = 'metric'
let lang = 'en'

const WEATHER_API = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&units=${unit}&${lang}&appid=${OPEN_WEATHER_API_KEY}`

const initGeolocation = () => {
    if (navigator.geolocation) {
        // Call getCurrentPosition with success and failure callbacks
        navigator.geolocation.getCurrentPosition(success, fail);
    }
    else {
        alert("Sorry, your browser does not support geolocation services.");
    }
}

const success = (position) => {

    document.getElementById('long').value = position.coords.longitude;
    document.getElementById('lat').value = position.coords.latitude
}

const fail = () => {
    // Could not obtain location
}

initGeolocation()