(() => {
    'use strict'
  
    //button click event listener for api call and display advice
const advice = document.getElementById('adviceText')
const id = document.getElementById('adviceId')
const button = document.getElementById('button')


//function to get advice from api
async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json();
    advice.innerHTML = `"${data.slip.advice}"`
    id.innerHTML = "ADVICE #" + data.slip.id
}
  
//event listener for button click
button.addEventListener('click', getAdvice)

  })();


