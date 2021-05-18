console.log('Client side javascript file is loaded.')
//  this is going to run in the browser

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent = 'From Javascript'

// some code that runs when someone submits the form (event listener for button click)
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()  // prevent browser from re rendering/flashing
    const location = search.value

    messageOne.textContent = 'Loading weather data'
    messageTwo.textContent = ''
    
    // Fetch is a browser based API. its not accessible in node
    // calling this kicks off an async io operation
    // -- youre passing a callback function to 'then'
    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                console.log(data.error)
                messageOne.textcontent = data.error
                messageTwo.textcontent = ''
            } else {
                console.log(data.location)
                console.log(data.forecast)
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})
