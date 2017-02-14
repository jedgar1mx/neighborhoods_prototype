var bagleObj = {
  properties: {
    name                : 'Bagley',
    type                : 'neighborhood',
    url                 : 'bagley.html',
    video               : '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/B1QVshbEIG4" frameborder="0" allowfullscreen></iframe>',
    summary             : 'Sample summary text for this specific "Neighborhood", good stuff. Some other news and highlights.',
    neighborhoods       : ['Blackstone Park', 'Fitzgerald', 'Greenwich', 'Harmony Village'],
    avgHouseholdIncome  : '65',
    garbagePickupDay    : 'friday',
    blockClubs          : '54',
    residents           : '16,866',
  }
};
var district2Obj = {
  properties: {
    name                : 'District 2',
    type                : 'district',
    url                 : 'district_2.html',
    video               : '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Zi0u5nNDbPE" frameborder="0" allowfullscreen></iframe>',
    summary             : 'Sample summary text for this specific "District", good stuff. Some other news and highlights.',
    neighborhoods       : ['Blackstone Park', 'Fitzgerald', 'Greenwich'],
    avgHouseholdIncome  : '75',
    garbagePickupDay    : 'mon/fri',
    blockClubs          : '139',
    residents           : '105,931',
  }
};
var card1 = Object.create(informationCardModule);
var bagleyMoveThere = function bagleyMoveThere() {
  card1.setCard(bagleObj);
  console.log(card1);
  card1.changeDisplay(card1);
};
window.onload = function(){
  document.getElementById('click').checked = false;
};
