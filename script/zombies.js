GVZ.Zombies = function() {

  this.init();
  
};

GVZ.Zombies.prototype = {

  init: function() {
   
    this.points = 0;
   
    // init zombie power
    
    this.zombiePower = [100, 100, 100, 100];
   
    // get all zombie targets
    
    var allZombieTargets = qx.bom.Collection.query('#playground .zombie-target');
    
    if (allZombieTargets.length > 0) {
    
      // for all zombie targets add listeners
    
      for (var i = 0; i < allZombieTargets.length; i++) {
      
        qx.event.Registration.addListener(allZombieTargets[i], 'mouseover', function(ev) {
        
          ev.preventDefault();
          
          var target = ev.getTarget();
          
          var zombie = target;
          
          if (!target.id) {
            
            zombie = target.parentNode;
            
          }
          
          if (!gvz.gvzControl.motherIsTalking) {
          
            qx.bom.element.Class.add(zombie, 'hover');
            
          }
          
        }, this);
      
        qx.event.Registration.addListener(allZombieTargets[i], 'mouseout', function(ev) {
        
          ev.preventDefault();
          
          var target = ev.getTarget();
          
          var zombie = target;
          
          if (!target.id) {
            
            zombie = target.parentNode;
            
          }
          
          qx.bom.element.Class.remove(zombie, 'hover');
          
        }, this);
      
        qx.event.Registration.addListener(allZombieTargets[i], 'click', function(ev) {
        
          ev.preventDefault();
          
          var target = ev.getTarget();
          
          var zombie = target;
          
          if (!target.id) {
            
            zombie = target.parentNode;
            
          }
          
          var gulasch = document.getElementById('gulasch');
          
          if (gulasch && !gvz.gvzControl.motherIsTalking) {

            var left = ev.getViewportLeft();
            
            var top = ev.getViewportTop();
            
            qx.bom.element.Style.set(gulasch, 'left', left + 'px');
            
            qx.bom.element.Style.set(gulasch, 'top', top + 'px');
            
            qx.bom.element.Class.add(gulasch, 'splash');
            
            setTimeout(function(scope, zombie) {
            
              return function() {
              
                document.getElementById('audio-splash').play();
              
                scope.calculateZombieHit(zombie);
              
              }
            
            }(this, zombie), 200);
            
            this.points = this.points + 10;
            
            this.updatePoints();
            
          }
          
        }, this);
        
        // for all zombie targets initialize movement
        
        window.setInterval(function(zombie) {
        
          return function() {
        
            if (qx.bom.element.Class.has(zombie, 'move-left')) {
          
              qx.bom.element.Class.remove(zombie, 'move-left');
            
              qx.bom.element.Class.add(zombie, 'move-right');
              
            } else {
            
              qx.bom.element.Class.remove(zombie, 'move-right');
            
              qx.bom.element.Class.add(zombie, 'move-left');
            
            }
            
          }
          
        }(allZombieTargets[i]), 1500);
      
      }
    
    }
  
  },
  
  calculateZombieHit: function(zombie) {
  
    var gulasch = document.getElementById('gulasch');
    
    if (gulasch) {

      qx.bom.element.Style.set(gulasch, 'left', '-100px');
      
      qx.bom.element.Style.set(gulasch, 'top', '-100px');
      
      qx.bom.element.Class.remove(gulasch, 'splash');
      
    }
    
    // reduce target zombie power by current gulasch power
    
    var index = zombie.id.substr(zombie.id.length - 1, 1);

    // check if zombie is already dead
    
    if (this.zombiePower[index - 1] !== 'dead') {
    
      this.zombiePower[index - 1] = this.zombiePower[index - 1] - Math.round(gvz.gvzControl.gulaschPower / 2);
      
      this.updateZombiePower();
      
    }
    
  },
  
  updateZombiePower: function() {
  
    for (var i = 0; i < this.zombiePower.length; i++) {
    
      var zombie = document.getElementById('zombie-' + (i + 1));
      
      var zombieStatus = document.getElementById('zombie-' + (i + 1) + '-status');
      
      if (zombie && zombieStatus) {
      
        if (this.zombiePower[i] !== 'dead' && this.zombiePower[i] <= 0) {
        
          // zombie is dead
        
          this.zombiePower[i] = 'dead';
          
          document.getElementById('audio-zombie-dies').play();
          
          qx.bom.element.Class.add(zombie, 'dead');
          
          qx.bom.element.Class.add(zombieStatus, 'dead');
          
          setTimeout(function(zombie, zombieStatus) {
          
            return function() {
            
              qx.bom.element.Class.add(zombie, 'hidden');
            
              qx.bom.element.Class.add(zombieStatus, 'hidden');
            
            }
          
          }(zombie, zombieStatus), 1500);
          
          this.points = this.points + 1000;
          
          this.updatePoints();
        
        } else {
        
          // update zombie power
          
          var glowElement = zombieStatus.getElementsByTagName('div')[0];
          
          if (glowElement) {
          
            qx.bom.element.Style.set(glowElement, 'width', this.zombiePower[i] + 'px');
          
          }
        
        }
      
      }
      
    }
        
    var allZombiesAreDead = true;
    
    for (var i = 0; i < this.zombiePower.length; i++) {
    
      if (this.zombiePower[i] !== 'dead') {
      
        allZombiesAreDead = false;
        
        break;
      
      }
    
    }
    
    if (allZombiesAreDead) {
    
      document.location.href = 'won.html';
      
    }
  
  },
  
  updatePoints: function() {
  
    var pointsElement = document.getElementById('points');
    
    if (pointsElement) {
      
      pointsElement.innerHTML = this.points;
    
    }
  
  }

};
