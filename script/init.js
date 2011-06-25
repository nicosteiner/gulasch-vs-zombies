GVZ.Init = function() {

  this.init();
  
};

GVZ.Init.prototype = {

 init: function() {
 
  if (typeof GVZ.Layers !== 'undefined') {
  
    var gvzLayers = new GVZ.Layers();
  
  }
  
  if (typeof GVZ.Control !== 'undefined') {
  
    var gvzControl = new GVZ.Control();
  
  }
  
 }

};

// go!

var gvz = new GVZ.Init();