var lat, lng;

fetch('https://weathersync.herokuapp.com/ip')
  .then(res => res.json())
  .then(res => {
    lat = res.location.latitude;
    lng = res.location.longitude;
    console.log(res, lat, lng);
    fetch(`https://weathersync.herokuapp.com/weather/${lat},${lng}`)
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(function(err) {
        console.log(err);
      });
  })
  .catch(function(err) {
    console.log(err);
  });
