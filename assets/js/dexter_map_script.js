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
    center: [-83.1, 42.4], // starting position
    zoom: 10 // starting zoom
});



//13/42.4170/-83.2357

// add schools
var schools = "http://gis.detroitmi.gov/arcgis/rest/services/WebDev/Schools/MapServer/0/query?where=1%3D1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=5&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=geojson";

// add hospitals
var hospitals = "http://gis.detroitmi.gov/arcgis/rest/services/Parks/ParksAndRec/FeatureServer/0/query?where=1%3D1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=5&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=geojson";

//add bikes
var bikes = "http://gis.detroitmi.gov/arcgis/rest/services/WebDev/Bike_Lanes/FeatureServer/0/query?where=1%3D1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=5&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=geojson";

//add neighborhoods
var neighborhoods = "http://gis.detroitmi.gov/arcgis/rest/services/WebDev/Neighborhoods/FeatureServer/0/query?where=1%3D1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=5&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=geojson";

//add parks
var parks = "http://gis.detroitmi.gov/arcgis/rest/services/Parks/ParksAndRec/FeatureServer/0/query?where=1%3D1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=5&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=geojson";

// load schools
map.on('load', function (e) {
    map.addSource('hospitals', {
        type: 'geojson',
        data:hospitals
    });

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
      data: 'https://gis.detroitmi.gov/arcgis/rest/services/WebDev/Council_Districts/FeatureServer/0/query?where=1%3D1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=5&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=geojson'
    });

    // add a fill layer
    map.addLayer({
      "id": "council-fill",
      "type": "fill",
      "source": "council", maxzoom: 12,
      "layout": {},
      "paint": {
        "fill-color": "#55899e",
        "fill-opacity": 0.9,
      }
    });

    map.addLayer({
      "id": "council-borders",
      "type": "line",
      "source": "council", maxzoom: 12,
      "layout": {},
      "paint": {
        "line-color": "white",
        "line-width": 1
      }
    });

    map.addLayer({
      "id": "council-fills-hover",
      "type": "fill",
      "source": "council", maxzoom: 12,
      "layout": {},
      "paint": {
        "fill-color": "#269AEF",
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
        "fill-color": "#55899e",
        "fill-opacity": 0.9,
      }
    });

    map.addLayer({
      "id": "neighborhoods-borders",
      "type": "line",
      "source": "neighborhoods",  minzoom: 12,
      "layout": {},
      "paint": {
        "line-color": "white",
        "line-width": 1
      }
    });

    map.addLayer({
      "id": "neighborhoods-fills-hover",
      "type": "fill",
      "source": "neighborhoods",  minzoom: 12,
      "layout": {},
      "paint": {
        "fill-color": "#269AEF",
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
    districtPopup.setLngLat(map.unproject(e.point))
        .setHTML(feature.properties.name)
        .addTo(map);
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

function createPopUp(currentFeature) {
    var popUps = document.getElementsByClassName('mapboxgl-popup');
    // Check if there is already a popup on the map and if so, remove it
    if (popUps[0]) popUps[0].remove();

    var popup = new mapboxgl.Popup({
            closeOnClick: false
        })
        .setLngLat(currentFeature.geometry.coordinates)
        .setHTML('<h3>' + currentFeature.properties.School_Nam +'</h3>' +
            '<h4>' + currentFeature.properties.Address + '</h4>' +
            '<h4>' + currentFeature.properties.Type + '</h4>' +
            '<h4>' + currentFeature.properties.Governance + '</h4>')
        .addTo(map);
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
