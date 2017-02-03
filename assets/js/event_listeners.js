var bagleObj = {
  properties: {
    name          : 'Bagley',
    type          : 'neighborhood',
    url           : 'sample URL',
    summary       : 'Sample summary text for this specific "Neighborhood", good stuff. Some other news and highlights.',
    neighborhoods : ['Blackstone Park', 'Fitzgerald', 'Greenwich', 'Harmony Village']
  }
};
var district2Obj = {
  properties: {
    name          : 'District 2',
    type          : 'district',
    url           : 'sample URL',
    summary       : 'Sample summary text for this specific "District", good stuff. Some other news and highlights.',
    neighborhoods : ['Blackstone Park', 'Fitzgerald', 'Greenwich', 'Harmony Village']
  }
};
var card1 = Object.create(informationCardModule);
window.onload = function(){
  document.getElementById('click').checked = false;
};
