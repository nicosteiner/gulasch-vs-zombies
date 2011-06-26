GVZ.Control = function() {

  this.init();
  
};

GVZ.Control.prototype = {

  init: function() {
 
    this.initializeTimeInterval();
  
    this.motherIsTalking = false;
 
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
        
        if (!this.wheelButtonLocked && !this.motherIsTalking) {
        
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
  
  initializeTimeInterval: function() {
  
    this.elapsedTime = 0;
  
    var interval = 750;
    
    gvz.gvzLayers.difficulty == 'medium' ? interval = 500 : false;
  
    gvz.gvzLayers.difficulty == 'high' ? interval = 250 : false;
    
    var glowElement = qx.bom.Collection.query('#time div.glow')[0];
    
    if (glowElement) {
    
      this.timeInterval = window.setInterval(function(scope, glowElement) {
      
        return function() {
    
          scope.elapsedTime++; 
    
          qx.bom.element.Style.set(glowElement, 'width', (400 - scope.elapsedTime) + 'px');
          
          if (scope.elapsedTime >= 400) {
          
            scope.gameLost();
          
          }
          
        }
        
      }(this, glowElement), interval);
    
    }
    
  },
  
  gameLost: function() {
  
    document.location.href = 'lost.html';
  
  },
  
  updateGulaschPowerBar: function() {
  
    var glowElement = qx.bom.Collection.query('#power-bar div.glow')[0];
    
    this.gulaschPower > 40 ? this.gulaschPower = 40 : false;
    
    if (glowElement) {
    
      var glowWidth = this.gulaschPower * 4;
      
      qx.bom.element.Style.set(glowElement, 'width', glowWidth + 'px');
    
    }
    
  },
  
  initializeHeatPowerInterval: function() {
  
    this.heatPowerInterval = window.setInterval(function(scope) {
      
        return function() {
        
          if (scope.heatPower < 160 ) {
          
            scope.heatPower = scope.heatPower + 2;
          
            if (scope.heatPower == 120 || scope.heatPower == 121) {
            
              document.getElementById('audio-too-much-heat').play();
              
            }
          
            scope.updateHeatPowerBar();
          
          }
        
        }
        
      }(this), 1500);
  
  },
  
  updateHeatPowerBar: function() {

    this.heatPower > 160  ? this.heatPower = 160 : false;
    
    // gulasch is too hot and looses power
    
    if (this.heatPower > 120) {
    
      this.gulaschPower = this.gulaschPower - 2;
      
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
      
        // make it hard to "trick" in the first and last quarter
      
        if (this.wheelPower < 40) {
        
          var randomPart = Math.round(Math.random() * 40);

          this.wheelPower = this.wheelPower + randomPart;
        
        }        
      
        if (this.wheelPower > 120) {
        
          var randomPart = Math.round(Math.random() * 40);

          this.wheelPower = this.wheelPower - randomPart;
        
        }        
      
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
      
      if (this.heatPower >= 140 && this.heatPower < 150) {
      
        document.getElementById('audio-too-much-heat').play();
        
      }
      
      this.updateHeatPowerBar();
    
    }
  
    if (wheelComponent == 4) {
    
      setTimeout(function(scope) {
      
        return function() {
        
          scope.motherIsCalling();
    
        }
      
      }(this), 1000);
      
    }
  
    if (wheelComponent == 5) {
    
      this.gulaschPower = 0;
      
      this.elapsedTime = 400 - Math.round((400 - this.elapsedTime) / 2);
      
      this.updateGulaschPowerBar();
    
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
    
  },
  
  motherIsCalling: function() {
  
    var motherContainer = document.getElementById('mother-container');
  
    var potContainer = document.getElementById('pot-container');
  
    if (motherContainer && potContainer) {
    
      qx.bom.element.Class.add(potContainer, 'hidden');
    
      qx.bom.element.Class.remove(motherContainer, 'hidden');
    
      this.motherIsTalking = true;
    
      // play sound
      
      document.getElementById('audio-mother-calling').play();
    
      // visualize mother conversation
    
      setTimeout(function() {
      
        qx.bom.element.Class.add(document.getElementById('mother-girlfriend'), 'hidden');
        qx.bom.element.Class.remove(document.getElementById('mother-baby'), 'hidden');
      
      }, 2250);
      
      setTimeout(function() {
      
        qx.bom.element.Class.add(document.getElementById('mother-baby'), 'hidden');
        qx.bom.element.Class.remove(document.getElementById('mother-letter'), 'hidden');
      
      }, 4500);      
      
      setTimeout(function() {
      
        qx.bom.element.Class.add(document.getElementById('mother-letter'), 'hidden');
        qx.bom.element.Class.remove(document.getElementById('mother-home'), 'hidden');
      
      }, 6750);
      
      setTimeout(function(scope) {
      
        return function() {
        
          qx.bom.element.Class.add(document.getElementById('mother-home'), 'hidden');
          qx.bom.element.Class.remove(document.getElementById('mother-girlfriend'), 'hidden');
          
          // show pot after conversation
          
          qx.bom.element.Class.add(document.getElementById('mother-container'), 'hidden');
          qx.bom.element.Class.remove(document.getElementById('pot-container'), 'hidden');
        
          scope.motherIsTalking = false;
          
        }
      
      }(this), 9000);
      
    }
  
  }

};