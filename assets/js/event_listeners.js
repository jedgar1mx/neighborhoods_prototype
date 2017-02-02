var card1 = Object.create(informationCardModule);
var card2 = Object.create(informationCardModule);
card1.setCard('Bagley', 'neighborhood', false, {'moreInfoURL': 'sample URL'});
card2.setCard('District 2', 'district', false, {'moreInfoURL': 'sample URL'});
window.onload = function(){
  document.getElementById('click').checked = false;
};
