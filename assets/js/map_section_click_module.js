var mapSectionClickModule = (function(){
  map.on('click', function (e) {
    console.log(e);
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
})(window);
