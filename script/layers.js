GVZ.Layers = function() {

  this.init();
  
};

GVZ.Layers.prototype = {

  init: function() {
 
    var startGameButton = document.getElementById('start-game');
   
    if (startGameButton) {
    
      qx.event.Registration.addListener(startGameButton, 'click', function(ev) {
      
        ev.preventDefault();
        
        // hide welcome layer
        
        if (document.getElementById('info-layer-1')) {
        
          qx.bom.element.Class.add(document.getElementById('info-layer-1'), 'hidden');
          
          this.hideInfoLayers();
          
          // start game here
        
        }
      
      }, this);
      
    }
  
  },
 
  hideInfoLayers: function() {
  
    if (document.getElementById('info-layers')) {
  
      qx.bom.element.Class.add(document.getElementById('info-layers'), 'hidden');
    
      this.hideInfoLayers();
    
      // start game here
  
    }
  
  }

};