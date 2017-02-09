var mapSectionClickModule = (function(informationCard){
  map.on('click', function (e) {
    console.log(e);
    var features = map.queryRenderedFeatures(e.point, { layers: ['council-fill'] });
    if (features.length) {
      //stuff to do with zooming into neighborhoods
      let feature = features[0];
      if(feature.properties.name == 'District 2'){
        map.flyTo({
            center: [-83.1510047, 42.426127],
            zoom: 12
        });
        card1.setCard(district2Obj);
        console.log(card1);
        card1.changeDisplay(card1);
      }
    }else {
      features = map.queryRenderedFeatures(e.point, { layers: ['school-marker'] });
      if (!features.length) {
        features = map.queryRenderedFeatures(e.point, { layers: ['library-marker'] });
        if (!features.length) {
          features = map.queryRenderedFeatures(e.point, { layers: ['bike-lanes'] });
          if (!features.length) {
            features = map.queryRenderedFeatures(e.point, { layers: ['parks-marker'] });
            if (!features.length) {
              features = map.queryRenderedFeatures(e.point, { layers: ['historic-fill'] });
              if (!features.length) {
                features = map.queryRenderedFeatures(e.point, { layers: ['restaurants-marker'] });
                if (!features.length) {
                  features = map.queryRenderedFeatures(e.point, { layers: ['neighborhoods-fill'] });
                  let feature = features[0];
                  if(feature.properties.name === 'Bagley'){
                    card1.setCard(bagleObj);
                    console.log(card1);
                    card1.changeDisplay(card1);
                  }
                  return;
                }
              }
            }
          }
        }
      }
      console.log(features);
      var feature = features[0];
      var popup = null;
      if(feature.layer.id === 'school-marker'){
        popup = new mapboxgl.Popup()
            .setLngLat(map.unproject(e.point))
            .setHTML(
              '<h5>' + feature.properties.name + '</h5><p>' + feature.properties.type + '</p>'
            )
            .addTo(map);
      }else{
        popup = new mapboxgl.Popup()
            .setLngLat(map.unproject(e.point))
            .setHTML(
              '<h5>' + feature.properties.name + '</h5>'
            )
            .addTo(map);
      }
    }
  });
})(informationCardModule);
