GVZ.Init = function() {

  this.init();
  
};

GVZ.Init.prototype = {

 init: function() {
 
  if (typeof GVZ.Layers !== 'undefined') {
  
    this.gvzLayers = new GVZ.Layers();
  
  }
  
 },
 
 startGame: function() {

  if (typeof GVZ.Control !== 'undefined') {
  
    this.gvzControl = new GVZ.Control();
  
  }
  
  if (typeof GVZ.Zombies !== 'undefined') {
  
    this.gvzZombies = new GVZ.Zombies();
  
  }
  
 }

};

// go!

var gvz = new GVZ.Init();