/*
 var locations = [
 ['Bondi Beach', -33.890542, 151.274856, 4],
 ['Coogee Beach', -33.923036, 151.259052, 5],
 ['Cronulla Beach', -34.028249, 151.157507, 3],
 ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
 ['Maroubra Beach', -33.950198, 151.259302, 1]
 ];
 
 var map = new google.maps.Map(document.getElementById('map'), {
 zoom: 10,
 center: new google.maps.LatLng(-33.92, 151.25),
 mapTypeId: google.maps.MapTypeId.ROADMAP
 });
 
 var infowindow = new google.maps.InfoWindow();
 
 var marker, i;
 
 for (i = 0; i < locations.length; i++) {
 marker = new google.maps.Marker({
 position: new google.maps.LatLng(locations[i][1], locations[i][2]),
 map: map
 });
 
 google.maps.event.addListener(marker, 'click', (function(marker, i) {
 return function() {
 infowindow.setContent(locations[i][0]);
 infowindow.open(map, marker);
 }
 })(marker, i));
 }
 */



jQuery(document).ready(function($) {
     /********************************* initializing Gmap ************************************/
     var map;
     //alert("hii");
     var locations = [
          ['Bondi Beach', -33.890542, 151.274856, 4],
          ['Coogee Beach', -33.923036, 151.259052, 5],
          ['Cronulla Beach', -34.028249, 151.157507, 3],
          ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
          ['Maroubra Beach', -33.950198, 151.259302, 1]
     ];
     function initialize() {
          var mapOptions = {
               zoom: 10,
               center: new google.maps.LatLng(-33.890542, 151.274856),
          };
          map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
          var populationOptions = {
               strokeColor: '#FFFF00',
               strokeOpacity: 0.8,
               strokeWeight: 2,
               fillColor: '#FFFF00',
               fillOpacity: 0.35,
               map: map,
               center: mapOptions.center,
               //radius: Drupal.settings.mapInfo.radius * 1000
          };
          var cityCircle = new google.maps.Circle(populationOptions);
          var marker = [];
          var infowindow = [];
          for (key in locations)
          {
               //console.log(locations[key][0]);
               infowindow[key] = new google.maps.InfoWindow({
                    content: locations[key][0],
                    pixelOffset: new google.maps.Size(0, -10),
               });

               marker[key] = new MarkerWithLabel({
                    map: map,
                    position: new google.maps.LatLng(locations[key][1], locations[key][2]),
                    draggable: false,
                    icon: {url: ''},
                    raiseOnDrag: false,
                    labelContent: '<span class ="icon-locations pointer_' + (parseInt(key) + 1) + '" onclick="return map_position_check(' + (parseInt(key) + 1) + ', false)"></span>',
                    //labelContent: '<span class="icon-locations pointer_' + (parseInt(key) + 1) + '" id="'+(parseInt(key) + 1)+'"></span>',
                    labelAnchor: new google.maps.Point(11, 21),
                    labelStyle: {opacity: 1.0},
                    labelInBackground: false,
               });

//               marker[key] = new google.maps.Marker({
//                    position: new google.maps.LatLng(locations[key][1], locations[key][2]),
//                    map: map,
//                    icon: 'marker.png',
//               });

               google.maps.event.addListener(marker[key], 'click', function(innerKey) {
                    return function() {
                         for (i in locations) {
                              infowindow[i].close();
                         }
                         infowindow[innerKey].open(map, marker[innerKey]);
                         
                    }
               }(key));
          }
     }

     google.maps.event.addDomListener(window, 'load', initialize);

//     function OpenInfowindowForMarker(index) {
//          google.maps.event.trigger(markers[index], 'click');
//     }

//     jQuery(".icon-locations").live('click', function() {
//          var id = jQuery(this).attr('id');
//          alert(id);
//     });

});


function map_position_check1(i, btn) {

     //console.log(map);

     //jQuery(".list").removeClass("active");
     jQuery(".list").each(function() {
          jQuery(this).removeClass('active');
     });
     jQuery('.box_' + i).addClass("active");

     //jQuery(this).addClass('locations-active');
     jQuery(".icon-locations").each(function() {
          jQuery(this).removeClass('icon-active');
     });
     jQuery('.pointer_' + i).addClass("icon-active");

     //if (btn) {
          //google.maps.event.trigger(markers[i], 'click');
     //}
     return false;
}