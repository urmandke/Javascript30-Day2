const secondHand = document.querySelector('.second-hand');
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');

function setDate(){
  const now = new Date();

  // Seconds hand degress calculation.
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds/ 60)* 360) +90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`
 
 // Hours hand degrees calculation.
  const hours = now.getHours();
  const hoursDegrees = (((hours+(minutes/60))/12)*360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`
  
  // minutes hand degrees calculation.
  const minutes = now.getMinutes();
  const minutesDegrees = (((minutes+(seconds/60))/60)*360) + 90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`
}

setInterval(setDate,1000);