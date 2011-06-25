GVZ.Control = function() {

  this.init();
  
};

GVZ.Control.prototype = {

  init: function() {
 
    // 0: salt
    // 1: paprika
    // 2: pepperoni
    // 3: feuer
    // 4: mutter
    // 5: magnet
   
    this.wheelKeys = ['salt', 'paprika', 'chili', 'burn', 'mother', 'magnet'];
   
    this.wheelComponents = [0, 4, 2, 0, 4, 1, 4, 3, 0, 5, 3, 1, 0, 3, 2, 1];
   
    this.wheelButtonLocked = false;
    
    this.gulaschPower = 3; // max is 40
 
    this.updateGulaschPowerBar();

    this.heatPower = 60; // max is 160 
    
    this.initializeHeatPowerInterval();
 
    var turnWheelButton = document.getElementById('turn-wheel');
   
    if (turnWheelButton) {
    
      qx.event.Registration.addListener(turnWheelButton, 'mousedown', function(ev) {
      
        ev.preventDefault();
        
        if (!this.wheelButtonLocked) {
        
          this.wheelButtonDown = true;
          
          this.wheelPower = 0;
          
          this.raiseWheelPower();
          
        }
        
      }, this);
      
      qx.event.Registration.addListener(turnWheelButton, 'mouseup', function(ev) {
      
        ev.preventDefault();
        
        this.wheelButtonDown = false;
        
        this.turnWheel();
        
      }, this);
      
      var stirringButton = document.getElementById('stirring-button');
      
      if (stirringButton) {

        qx.event.Registration.addListener(stirringButton, 'click', function(ev) {
        
          ev.preventDefault();
          
          this.stirrGulasch();
          
        }, this);

      }
      
    }
  
  },
  
  updateGulaschPowerBar: function() {
  
    var glowElement = qx.bom.Collection.query('#power-bar div.glow')[0];
    
    if (glowElement) {
    
      var glowWidth = this.gulaschPower * 4;
      
      qx.bom.element.Style.set(glowElement, 'width', glowWidth + 'px');
    
    }
    
  },
  
  initializeHeatPowerInterval: function() {
  
    this.heatPowerInterval = window.setInterval(function(scope) {
      
        return function() {
        
          if (scope.heatPower < 160 ) {
          
            scope.heatPower++;
          
            scope.updateHeatPowerBar();
          
          }
        
        }
        
      }(this), 1500);
  
  },
  
  updateHeatPowerBar: function() {

    this.heatPower > 160  ? this.heatPower = 160 : false;
    
    // gulasch is too hot and looses power
    
    if (this.heatPower > 140) {
    
      this.gulaschPower--;
      
      this.gulaschPower < 0 ? this.gulaschPower = 0 : false;
      
      this.updateGulaschPowerBar();
    
    }
    
    var glowElement = qx.bom.Collection.query('#heat-bar div.glow')[0];
    
    if (glowElement) {
    
      var glowWidth = this.heatPower;
      
      qx.bom.element.Style.set(glowElement, 'width', glowWidth + 'px');
    
    }
    
    var potGlowElement = document.getElementById('pot-glow');
    
    if (potGlowElement && this.heatPower > 80) {
    
      var opacity = Math.round(this.heatPower / 16) / 10;
    
      qx.bom.element.Style.set(potGlowElement, 'opacity', opacity);      
    
    }
    
  },
  
  stirrGulasch: function() {
  
    // stirring Gulasch reduces heat
    
    this.heatPower--;
    
    this.heatPower < 0 ? this.heatPower = 0 : false;
    
    this.updateHeatPowerBar();
  
  },
  
  raiseWheelPower: function() {
  
    if (this.wheelButtonDown) {
    
      this.wheelButtonInterval = window.setInterval(function(scope) {
      
        return function() {
      
          if (scope.wheelButtonDown) {

            var glowElement = qx.bom.Collection.query('#wheel-container div.glow')[0];
          
            if (glowElement) {
            
              if (scope.wheelPower <= 160) {
              
                scope.wheelPower++;
                
                var glowWidth = scope.wheelPower;
                
                qx.bom.element.Style.set(glowElement, 'width', glowWidth + 'px');
                
              }
            
            }
          
          } else {
          
            window.clearInterval(scope.wheelButtonInterval);
          
          }
          
        }
      
      }(this), 15);
    
    }
  
  },
  
  turnWheel: function() {
  
    var wheel = document.getElementById('wheel');
    
    if (wheel) {

    this.wheelButtonLocked = true;  

    if (this.wheelPower && wheel) {
      
        var rotation = Math.round(360 / 16 * (this.wheelPower / 10));
    
        wheel.style.MozTransform = 'rotate(-' + rotation + 'deg)';
        
      }
      
      // after rotation go on
      
      setTimeout(function(scope) {
      
        return function() {
        
          scope.calculateResult();
        
        }
      
      }(this), 400);
    
    }
    
  },
  
  calculateResult: function() {
    
    var index = Math.round(this.wheelPower / 10) - 1;
    
    index < 0 ? index = 0 : false;
    
    this.updateGameStatus(index);
    
    var wheel = document.getElementById('wheel');
    
    if (wheel) {

      setTimeout(function(wheel) {
      
        return function() {
        
          wheel.style.MozTransform = 'rotate(-11deg)';
          
        }
        
      }(wheel), 400);
      
    }
        
    var glowElement = qx.bom.Collection.query('#wheel-container div.glow')[0];
  
    if (glowElement) {
      
      this.wheelPower = 0;
      
      qx.bom.element.Style.set(glowElement, 'width', this.wheelPower + 'px');
      
    }
    
    this.wheelButtonLocked = false;
  
  },
  
  
  updateGameStatus: function(index) {

    var wheelComponent = this.wheelComponents[index];
    
    if (wheelComponent == 0) {
    
      this.gulaschPower = this.gulaschPower + 1;
      
      this.updateGulaschPowerBar();
    
    }
  
    if (wheelComponent == 1) {
    
      this.gulaschPower = this.gulaschPower + 2;
      
      this.updateGulaschPowerBar();
    
    }
  
    if (wheelComponent == 2) {
    
      this.gulaschPower = this.gulaschPower + 3;
      
      this.updateGulaschPowerBar();
    
    }
  
    if (wheelComponent == 3) {
    
      this.heatPower = this.heatPower + 10;
      
      this.updateHeatPowerBar();
    
    }
  
    var wheelKey = this.wheelKeys[this.wheelComponents[index]];

    var potStatusGraphic = document.getElementById('pot-status');
    
    if (potStatusGraphic) {
    
      qx.bom.element.Class.remove(potStatusGraphic, 'hidden');

      potStatusGraphic.style.opacity = '1';
      
      potStatusGraphic.src = 'img/' + wheelKey + '.png';
      
      setTimeout(function(potStatusGraphic) {
      
        return function() {
        
          potStatusGraphic.style.opacity = '0';
        
        }
      
      }(potStatusGraphic), 400);

    }
    
  }

};