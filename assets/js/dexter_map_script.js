// This will let you use the .remove() function later on
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function() {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
mapboxgl.accessToken = 'pk.eyJ1Ijoic2x1c2Fyc2tpZGRldHJvaXRtaSIsImEiOiJjaXZsNXlwcXQwYnY5MnlsYml4NTJ2Mno4In0.8wKUnlMPIlxq-eWH0d10-Q';
// This adds the map to your page
var map = new mapboxgl.Map({
    // container id specified in the HTML
    container: 'map', // style URL
    style: 'mapbox://styles/mapbox/streets-v9', //stylesheet location
    center: [-83.1, 42.375], // starting position
    zoom: 10.5 // starting zoom
});



//13/42.4170/-83.2357

// add schools
var schools = "http://gis.detroitmi.gov/arcgis/rest/services/WebDev/Schools/FeatureServer/0/query?where=1%3D1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=5&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=geojson";

//add bikes
var bikes = "http://gis.detroitmi.gov/arcgis/rest/services/WebDev/Bike_Lanes/FeatureServer/0/query?where=1%3D1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=5&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=geojson";

//add neighborhoods
var neighborhoods = "http://gis.detroitmi.gov/arcgis/rest/services/WebDev/Neighborhoods/FeatureServer/0/query?where=1%3D1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=5&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=geojson";

//add parks
var parks = "http://gis.detroitmi.gov/arcgis/rest/services/Parks/ParksAndRec/FeatureServer/0/query?where=1%3D1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=5&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=geojson";

var councils = 'https://gis.detroitmi.gov/arcgis/rest/services/WebDev/Council_Districts/FeatureServer/0/query?where=1%3D1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=5&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=geojson';

var historic = 'https://gis.detroitmi.gov/arcgis/rest/services/WebDev/local_historic_districts/FeatureServer/0/query?where=1%3D1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=5&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=geojson';

var restaurantsBars =
'https://api.foursquare.com/v2/venues/search?v=20161016&query=cafe%2Crestaurant%2Cbar&intent=checkin&client_id=BSLR5UVUCA5M0JG1VDBCIT3OHAZJNJ3ZLIE4Q51ENVHPU4JG&client_secret=Z22OJZRKVVIBY1DDHL0GDHK2MX4ZNKDEIZKDPDVITE5BWAXR&near=detroit';

var flatColorMap = '#55899e';
// var popColorMap = '#269AEF';
//var flatColorMap = '#00C1ED';
var popColorMap = '#55b74c';
// load schools
var loadFoursquareAPI = function loadFoursquareAPI(foursquare_url) {
  // make the call to the foursquare api, add the results to the map
  function status(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }

  function json(response) {
    return response.json();
  }

  fetch(foursquare_url)
    .then(status)
    .then(json)
    .then(function(data) {
    console.log(data);
    // add the results to the map
    var barSites = data.response.venues;
    var barGeojson = [];
    for (var i = 0; i < barSites.length; i++) {
      var barFeature = {
        type: 'Feature',
        properties: {
          name: barSites[i].name,
          address: barSites[i].location.address + ', ' + barSites[i].location.city + ' ' + barSites[i].location.state + ' ' + barSites[i].location.postalCode,
          url: barSites[i].url
        },
        geometry: {
          type: 'Point',
          coordinates: [
            barSites[i].location.lng,
            barSites[i].location.lat
          ]
        }
      };
      barGeojson.push(barFeature);
    }
    map.addSource('restaurantsBars', {
        type: 'geojson',
        "data": {
          "type": "FeatureCollection",
          "features": barGeojson
        }
    });
  });
};
map.on('load', function (e) {
    loadFoursquareAPI(restaurantsBars);

    map.addSource('schools', {
        type: 'geojson',
        data:schools
    });

    map.addSource('bikes', {
        type: 'geojson',
        data:bikes
    });

    map.addSource('parks', {
        type: 'geojson',
        data:parks
    });

  // use council districts
    map.addSource('council', {
      type: 'geojson',
      data: councils
    });

    map.addSource('historic', {
      type: 'geojson',
      data: historic
    });

    // add a fill layer
    map.addLayer({
      "id": "council-fill",
      "type": "fill",
      "source": "council", maxzoom: 12,
      "layout": {},
      "paint": {
        "fill-color": flatColorMap,
        "fill-opacity": 1,
      }
    });

    map.addLayer({
      "id": "council-fills-hover",
      "type": "fill",
      "source": "council", maxzoom: 12,
      "layout": {},
      "paint": {
        "fill-color": popColorMap,
        "fill-opacity": 1
      },
      "filter": ["==", "name", ""]
    });

// ================== neighborhoods =========================
    map.addSource('neighborhoods', {
      type: 'geojson',
      data: neighborhoods
    });

    map.addLayer({
      "id": "neighborhoods-fill",
      "type": "fill",
      "source": "neighborhoods", minzoom: 12,
      "layout": {},
      "paint": {
        "fill-color": flatColorMap,
        "fill-opacity": 0.9,
      }
    });

    map.addLayer({
      "id": "neighborhoods-borders",
      "type": "line",
      "source": "neighborhoods",  minzoom: 12,
      "layout": {},
      "paint": {
        "line-color": "#EAE472",
        "line-width": 1
      }
    });

    map.addLayer({
      "id": "neighborhoods-fills-hover",
      "type": "fill",
      "source": "neighborhoods",  minzoom: 12,
      "layout": {},
      "paint": {
        "fill-color": popColorMap,
        "fill-opacity": 1
      },
      "filter": ["==", "name", ""]
    });

    map.addLayer({
      'id': 'neighborhoods-labels',
      'type': 'symbol',
      'source': 'neighborhoods',
              'minzoom': 12,
      'layout': {
        'text-field': '{name}'
      },
      'paint': {
        'text-color': 'black'

      }
    });

    map.addLayer({
      "id": "council-borders",
      "type": "line",
      "source": "council",
      "layout": {},
      "paint": {
        "line-color": "white",
        "line-width": 3
      }
    });

// When the user moves their mouse over the page, we look for features
// at the mouse position (e.point) and within the states layer (states-fill).
// If a feature is found, then we'll update the filter in the state-fills-hover
// layer to only show that state, thus making a hover effect.

});

var districtPopup = new mapboxgl.Popup({
    closeButton: true,
    closeOnClick: false
});

map.on("mousemove", function(e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ["council-fill"]
  });
  map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
  if (features.length) {
    map.setFilter("council-fills-hover", ["==", "name", features[0].properties.name]);
    var feature = features[0];

    // Populate the popup and set its coordinates
    // based on the feature found.
    console.log(feature);
    if(feature.properties.name === 'District 2'){
      districtPopup.setLngLat(map.unproject(e.point))
          .setHTML('<h5>' + feature.properties.name + ' <span id="district-popup-img"><img src="assets/img/marygrove-logo-badge.png" alt="Marygrove"></img></span></h5>')
          .addTo(map);
    }else{
      districtPopup.setLngLat(map.unproject(e.point))
          .setHTML('<h5>' + feature.properties.name + ' <span id="district-popup-img"><img src="assets/img/new.png" alt="badge"></img></span></h5>')
          .addTo(map);
    }
  } else {
    features = map.queryRenderedFeatures(e.point, {
      layers: ["neighborhoods-fill"]
    });
    if(features.length){
      map.setFilter("neighborhoods-fills-hover", ["==", "name", features[0].properties.name]);
      map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
    }else{
      map.setFilter("council-fills-hover", ["==", "name", ""]);
      districtPopup.remove();
    }
  }
});

// Reset the state-fills-hover layer's filter when the mouse leaves the map
map.on("mouseout", function() {
  map.setFilter("council-fills-hover", ["==", "name", ""]);
  map.setFilter("hoods-fills-hover", ["==", "name", ""]);
});

//create function
function flyToStore(currentFeature) {
    map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 16
    });
}
// Add an event listener for when a user clicks on the map
map.on('click', function(e) {
    // Query all the rendered points in the view
    var features = map.queryRenderedFeatures(e.point, {
        layers: ['council-fills-hover']
    });
    if (features.length) {
      districtPopup.remove();
    }
});
