var bagleObj = {
  properties: {
    name                : 'Bagley',
    type                : 'neighborhood',
    url                 : 'sample URL',
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
    url                 : 'sample URL',
    summary             : 'Sample summary text for this specific "District", good stuff. Some other news and highlights.',
    neighborhoods       : ['Blackstone Park', 'Fitzgerald', 'Greenwich', 'Harmony Village'],
    avgHouseholdIncome  : '75',
    garbagePickupDay    : 'mon/fri',
    blockClubs          : '139',
    residents           : '26,851',
  }
};
var card1 = Object.create(informationCardModule);
window.onload = function(){
  document.getElementById('click').checked = false;
};
