var card1 = Object.create(informationCardModule);
card1.setCard('Bagley', false, {'moreInfoURL': 'sample URL'});
window.onload = function(){
  document.getElementById('click').checked = false;
};
