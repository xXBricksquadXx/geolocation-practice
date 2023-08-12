//get the geolocation of the user
navigator.geolocation.getCurrentPosition((position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  //update the content of the HTML elements with coordinates
  document.getElementById('latitude').textContent= latitude;
  document.getElementById('longitude').textContent= longitude;
}, (Error) => {
console.error (`Error getting geolocation: ${Error.message}`)  
});
