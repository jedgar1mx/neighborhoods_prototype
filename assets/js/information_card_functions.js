var informationCardModule = (function(){
  var informationCard = {
    title: '',
    type: '',
    active: '',
    info: '',
    openNewPage: function() {
      console.log(this.title);
      if(this.type === 'neighborhood'){
        var win = window.open('neighborhoods/' + this.title + '.html', '_blank');
      }else{
        var win = window.open('districts/' + this.title + '.html', '_blank');
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
      console.log('will display card');
      document.getElementById('neighborhood-info-container').className = '';
      this.active = true;
    },
    hideCard: function() {
      console.log('will hide card');
      document.getElementById('neighborhood-info-container').className = 'hidden';
      this.active = false;
    },
    setCard: function(title, active, info){
      this.title = title;
      this.active = active;
      this.info = info;
    }
  }
  return informationCard;
})(window);
