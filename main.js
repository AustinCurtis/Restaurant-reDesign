var imageGallery = [
  "img/food/1.jpg",      
  "img/food/2.jpg",
  "img/food/3.jpg",
  "img/food/4.jpg",
  "img/food/5.jpg",
];

var count = 0;
var total = imageGallery.length - 1;

function next() {
 count++ ;
  if(count > total) count = 0
   
  document.getElementById("galleryjs").src = imageGallery[count] ;
}

function Play() {
  setInterval(next, 5000);
}

Play();

function initMap() {
        var uluru = {lat: 40.1631794, lng: -105.0996521};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }