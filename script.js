// script.js

function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
  
    // Calculate degrees for each hand
    const secondsDegrees = (seconds / 60) * 360 + 90; // offset by 90deg
    const minutesDegrees = (minutes / 60) * 360 + 90;
    const hoursDegrees = (hours / 12) * 360 + 90 + (minutes / 60) * 30; // adjust for minute offset
  
    // Select clock hands
    document.querySelector('.second-hand').style.transform = `rotate(${secondsDegrees}deg)`;
    document.querySelector('.minute-hand').style.transform = `rotate(${minutesDegrees}deg)`;
    document.querySelector('.hour-hand').style.transform = `rotate(${hoursDegrees}deg)`;
  }
  
  // Update clock every second
  setInterval(updateClock, 1000);
  updateClock(); // Initial call to set hands immediately  