var mapSectionClickModule = (function(informationCard){
  map.on('click', function (e) {
    console.log(e);
    //card1.changeDisplay(card1);
    var features = map.queryRenderedFeatures(e.point, { layers: ['council-fill'] });
    if (features.length) {
      console.log(features);
      //stuff to do with zooming into neighborhoods
      map.flyTo({
          center: [-83.1510047, 42.426127],
          zoom: 14
      });
    }else {
      features = map.queryRenderedFeatures(e.point, { layers: ['school-marker'] });
      if (!features.length) {
          features = map.queryRenderedFeatures(e.point, { layers: ['bike-lanes'] });
          if (!features.length) {
            features = map.queryRenderedFeatures(e.point, { layers: ['hospital-marker'] });
            if (!features.length) {
              card1.changeDisplay(card1);
              return;
            }
          }
      }
      console.log(features);
      var feature = features[0];

      var popup = new mapboxgl.Popup()
          .setLngLat(map.unproject(e.point))
          .setHTML(
            '<h5>' + feature.properties.name + '</h5><p><b>Address:</b> ' + feature.properties.address + '</p>'
          )
          .addTo(map);
    }
  });
})(informationCardModule);
