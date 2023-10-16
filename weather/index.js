var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')

// apik ="40a1f10b184e655d691e19a04ff57982"
// apik="63a90ae96d390ec37d6c1252f5a86e1"
apik = "4be3817ba2efafd81c405aa35bc369a4";
function convertion(val) {
    return (val - 273).toFixed(3)
}
btn.addEventListener('click', function () {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputvalue.value + "&appid=" + apik)
        // fetch('https://api.openweathermap.org/data/2.5/weather?q={inputvalue.value}&appid={apik}')
        .then(res => res.json())

        .then(data => {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var wndspeed = data['wind']['speed']

            cityinput.innerHTML = `Weather of <span>${nameval}<span>`
            temp.innerHTML = `Temperature: <span>${convertion(tempature)} C<span>`
            description.innerHTML = `Sky Conditions : <span>${descrip}<span>`
            wind.innerHTML = `Wind Speed : <span>${wndspeed} km/h <span>`
        }
        )
        .catch(err => alert('You entered Wrong city name'))
}
)