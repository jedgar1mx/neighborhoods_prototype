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
    container: 'map',
    // style URL
    style: 'mapbox://styles/slusarskiddetroitmi/cixxixdy6002g2rr0e5zaxdte',
    // initial position in [long, lat] format
    center: [-83.1510047, 42.426127],
    // initial zoom
    zoom: 12.2
});



//13/42.4170/-83.2357

// add schools
var schools = 'assets/js/schools.geojson'

var hospitals = 'assets/js/hospitals.geojson'
//"http://gis.detroitmi.gov/arcgis/rest/services/Parks/ParksAndRec/FeatureServer/0/query?where=1%3D1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=5&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=geojson"
//'assets/js/hospitals.geojson'

var bikes = 'assets/js/bikes.geojson'

// add hospitals

// load schools
map.on('load', function (e) {
    map.addSource('hospitals', {
        type: 'geojson',
        data:hospitals
    });
    // map.addLayer({
    //     'id': 'hospital-marker',
    //     'type': 'symbol',
    //     'source': 'hospitals',
    //     'layout': {
    //         'icon-image': 'hospital-15'
    //     }
    // });

    map.addSource('schools', {
        type: 'geojson',
        data:schools
    });
    // map.addLayer({
    //     'id': 'school-marker',
    //     'type': 'symbol',
    //     'source': 'schools',
    //     'layout': {
    //       'icon-image': 'college-15'
    //     },
    //
    // });

    map.addSource('bikes', {
        type: 'geojson',
        data:bikes
    });
    // map.addLayer({
    //     'id': 'bike-lanes',
    //     'type': 'line',
    //     'source': 'bikes',
    //     'layout': {
    //         'visibility': 'visible',
    //         'line-join': 'round',
    //         'line-cap': 'round'
    //     },
    //     'paint': {
    //         'line-color': '#05E447',
    //         'line-width': 4
    //     }
    //
    // });
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
        layers: ['locations']
    });
    if (features.length) {
        var clickedPoint = features[0];
        // 1. Fly to the point
        flyToStore(clickedPoint);
        // 2. Close all other popups and display popup for clicked property
        createPopUp(clickedPoint);
        // 3. Highlight listing in sidebar (and remove highlight for all other listings)
        var activeItem = document.getElementsByClassName('active');
        if (activeItem[0]) {
            activeItem[0].classList.remove('active');
        }
        // Find the index of the property.features that corresponds to the clickedPoint that fired the event listener
        var selectedFeature = clickedPoint.properties.address;

        for (var i = 0; i < schools.features.length; i++) {
            if (schools.features[i].properties.address === selectedFeature) {
                selectedFeatureIndex = i;
            }
        }
        // Select the correct list item using the found index and add the active class
        var listing = document.getElementById('listing-' + selectedFeatureIndex);
        listing.classList.add('active');
    }
});



function buildLocationList(data) {
    // Iterate through the list of properties
    for (i = 0; i < data.features.length; i++) {
        var currentFeature = data.features[i];
        // Shorten data.feature.properties to just `prop` so we're not
        // writing this long form over and over again.
        var prop = currentFeature.properties;
        // Select the listing container in the HTML and append a div
        // with the class 'item' for each property
        var listings = document.getElementById('listings');
        var listing = listings.appendChild(document.createElement('div'));
        listing.className = 'item';
        listing.id = 'listing-' + i;

        // Create a new link with the class 'title' for each property
        // and fill it with the property address
        var link = listing.appendChild(document.createElement('a'));
        link.href = '#';
        link.className = 'title';
        link.dataPosition = i;
        link.innerHTML = prop.address;

        // Create a new div with the class 'details' for each property
        // and fill it with the city and phone number
        var details = listing.appendChild(document.createElement('div'));
        details.innerHTML = prop.estimated_cost;
        if (prop.bld_permit_desc) {
            details.innerHTML += ' &middot; ' + prop.bld_permit_desc;
        }

        link.addEventListener('click', function(e) {
            // Update the currentFeature to the property associated with the clicked link
            var clickedListing = data.features[this.dataPosition];

            // 1. Fly to the point associated with the clicked link
            flyToStore(clickedListing);

            // 2. Close all other popups and display popup for clicked property
            createPopUp(clickedListing);

            // 3. Highlight listing in sidebar (and remove highlight for all other listings)
            var activeItem = document.getElementsByClassName('active');

            if (activeItem[0]) {
                activeItem[0].classList.remove('active');
            }
            this.parentNode.classList.add('active');

        });
    }
}
