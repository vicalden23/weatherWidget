let lat, lng, city, temp, picture, description;

let weatherData = fetch('https://weathersync.herokuapp.com/ip')
  .then(res => res.json())
  .then(res => {
    lat = res.location.latitude;
    lng = res.location.longitude;
    city = res.city;
    console.log(res, lat, lng);
    fetch(`https://weathersync.herokuapp.com/weather/${lat},${lng}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        temp = res.main.temp;
        description = res.weather[0].main;
        picture = `http://openweathermap.org/img/w/${res.weather[0].icon}.png`;
        document.getElementById('city').innerHTML = city;
        document.getElementById('temp').innerHTML = temp;
        document.getElementById('picture').src = picture;
        document.getElementById('description').innerHTML = description;
        console.log(temp, description);
      })
      .catch(function(err) {
        console.log(err);
      });
  })
  .catch(function(err) {
    console.log(err);
  });
