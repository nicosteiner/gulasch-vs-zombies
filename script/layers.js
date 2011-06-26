GVZ.Layers = function() {

  this.init();
  
};

GVZ.Layers.prototype = {

  init: function() {
 
    var startGameButton = document.getElementById('start-game');
   
    if (startGameButton) {
    
      qx.event.Registration.addListener(startGameButton, 'click', function(ev) {
      
        ev.preventDefault();
        
        // save difficulty
        
        this.difficulty = document.getElementById('difficulty').value;
        
        // hide welcome layer
        
        if (document.getElementById('info-layer-1')) {
        
          qx.bom.element.Class.add(document.getElementById('info-layer-1'), 'hidden');
          
          this.hideInfoLayers();
          
        }
      
      }, this);
      
    }
  
  },
 
  hideInfoLayers: function() {
  
    if (document.getElementById('info-layers')) {
  
      qx.bom.element.Class.add(document.getElementById('info-layers'), 'hidden');
    
      // start game here
      
      // play intro audio
      
      document.getElementById('audio-intro').play();
      
      gvz.startGame();
  
    }
  
  }

};