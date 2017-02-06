var informationCardModule = (function(){
  var informationCard = {
    name                : '',
    type                : '',
    active              : '',
    info                : '',
    summary             : '',
    neighborhoods       : '',
    avgHouseholdIncome  : '',
    garbagePickupDay    : '',
    blockClubs          : '',
    residents           : '',
    openNewPage: function() {
      console.log(this.name);
      var win;
      if(this.type === 'neighborhood'){
         win = window.open('neighborhoods/' + this.name + '.html', '_blank');
      }else{
        win = window.open('districts/' + this.name + '.html', '_blank');
      }
      if (win) {
          //Browser has allowed it to be opened
          win.focus();
      } else {
          //Browser has blocked it
          alert('Please allow popups for this website');
      }
    },
    changeDisplay: function() {
      (this.active) ? this.hideCard(): this.displayCard();
    },
    displayCard: function() {
      this.loadCardData();
      console.log('will display card');
      document.getElementById('neighborhood-info-container').className = '';
      this.active = true;
    },
    hideCard: function() {
      console.log('will hide card');
      document.getElementById('neighborhood-info-container').className = 'hidden';
      this.active = false;
    },
    setCard: function(infoObj){
      if(Object.keys(infoObj.properties).length !== 0){
        this.name = infoObj.properties.name;
        this.type = infoObj.properties.type;
        this.active = false;
        this.url = infoObj.properties.url;
        this.summary = infoObj.properties.summary;
        this.neighborhoods = infoObj.properties.neighborhoods;
        this.avgHouseholdIncome = infoObj.properties.avgHouseholdIncome;
        this.garbagePickupDay = infoObj.properties.garbagePickupDay;
        this.blockClubs = infoObj.properties.blockClubs;
        this.residents = infoObj.properties.residents;
      }
    },
    loadCardData: function() {
      console.log('will load data to card');
      document.getElementById('neighborhood-name').innerHTML = this.name;
      document.querySelector('.info-card-row > .neighborhood-summary').innerHTML = this.summary;
      (this.type === 'district') ? document.getElementById('card-type').innerHTML = 'District' : document.getElementById('card-type').innerHTML = 'Nerby';
      this.createNeighborhoodsList();
      this.createFourSquareData();
    },
    createNeighborhoodsList: function () {
      let tempHtml = '';
      let tracker = 0;
      this.neighborhoods.forEach(function(item){
        tempHtml += '<a href="#">' + item + '</a>';
        (tracker < (this.neighborhoods.length)) ? tempHtml += ', ': 0;
        tracker++;
      });
      (this.type === 'district') ? this.createDistrictNeighborhoodsMoreBtn(tempHtml): document.querySelector('.near-neighborhoods-list').innerHTML = tempHtml;
    },
    createDistrictNeighborhoodsMoreBtn: function (tempHtml) {
      tempHtml += '<a class="more-neighborhoods-btn" href="#">MORE</a>';
      document.querySelector('.near-neighborhoods-list').innerHTML = tempHtml;
    },
    createFourSquareData: function () {
      document.getElementById('household-income').innerHTML = '$' + this.avgHouseholdIncome + 'k';
      document.getElementById('garbage-pickup-day').innerHTML = this.garbagePickupDay.toUpperCase();
      document.getElementById('block-clubs').innerHTML = this.blockClubs;
      document.getElementById('residents').innerHTML = this.residents;
    }
  };
  return informationCard;
})(window);
