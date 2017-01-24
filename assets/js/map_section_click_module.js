var mapSectionClickModule = (function(informationCard){
  map.on('click', function (e) {
    console.log(e);
    card1.changeDisplay(card1);
    var features = map.queryRenderedFeatures(e.point, { layers: ['states-layer'] });
    if (!features.length) {
        return;
    }

    var feature = features[0];

    var popup = new mapboxgl.Popup()
        .setLngLat(map.unproject(e.point))
        .setHTML(feature.properties.name)
        .addTo(map);
  });
})(informationCardModule);
