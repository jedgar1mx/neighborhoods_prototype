(function(){
  var subMenuDisplayProcessing = function subMenuDisplayProcessing() {
    var subMenuDisplaySelection = 'none';
    function checkSubMenuRequest(obj) {
      console.log('current:' + subMenuDisplaySelection);
      if(subMenuDisplaySelection != obj.id){
        (subMenuDisplaySelection == 'none') ? 0:document.querySelector('.sub-menu-item.active').className = 'sub-menu-item';
        subMenuDisplaySelection = obj.id;
        console.log('new:' + subMenuDisplaySelection);
        obj.className = 'sub-menu-item active';
      }else{
        obj.className = 'sub-menu-item';
        subMenuDisplaySelection = 'none';
      }
    }
    function changeMenuClassSet(newClassList){
      document.querySelector('.sub-menu-row').className = newClassList;
    }
    return {
      changeDisplay: function(obj) {
        checkSubMenuRequest(obj);
      }
    }
  }
  var subMenu = subMenuDisplayProcessing();
  var subMenuAction = function subMenuAction(e) {
    subMenu.changeDisplay(e);
  }
  var displayMenuProcess = function displayMenuProcess() {
    var subMenuDisplayProcessing = 'false';
    function checkIfMenuActive() {
      if(subMenuDisplayProcessing == 'false'){
        subMenuDisplayProcessing = 'true';
        let subMenu = document.querySelector('.sub-menu-row');
        let subMenuClasses = subMenu.className.split(' ');
        let firstTime = 1;
        subMenuClasses.forEach(function(item){
          if(item == 'active'){
            changeMenuClassSet('sub-menu-row hidden');
            --firstTime;
            return 0;
          }else{
            changeMenuClassSet('sub-menu-row active');
            --firstTime;
            return 0;
          }
        });
        let delay=1000;
        setTimeout(function() {
          subMenuDisplayProcessing = 'false';
        }, delay);
      }
    }
    function changeMenuClassSet(newClassList){
      document.querySelector('.sub-menu-row').className = newClassList;
    }
    return {
      changeDisplay: function() {
        checkIfMenuActive();
      }
    }
  }
  var menu = displayMenuProcess();
  var menuDisplay = function menuDisplay() {
    menu.changeDisplay();
  }
  var moveToPoint = function moveToPoint(coordinates){
    map.flyTo({
      center: coordinates
    });
  }
  var moveToPointAction = function moveToPointAction(triggerObj) {
      let triggerID = '';
      if(triggerObj.id == ''){
        triggerID = triggerObj.parentNode.id;
      }else{
        triggerID = triggerObj.id;
      }
      if(triggerID == 'search-btn'){
        moveToPoint([-83.1510047, 42.426127]);
      }else{
        if(event.keyCode == 13) {
          moveToPoint([-83.1510047, 42.426127]);
        }
      }

      // map.fitBounds([[
      //       -83.1510047, 42.426127
      // ]]);
  }
  document.getElementById('search-btn').addEventListener('click', function (e) {
    moveToPointAction(e.target);
  });
  document.getElementById('address-search').addEventListener('keydown', function (e) {
    moveToPointAction(e);
  });
  document.getElementById('navigation').addEventListener('click', menuDisplay);
  Array.from(document.getElementsByClassName('sub-menu-item')).forEach(function(item) {
    item.addEventListener('click', function (e) {
      subMenuAction(e.target);
    });
  });
})(window);
