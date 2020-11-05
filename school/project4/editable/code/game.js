
//Use ctrl F  to search

//makes the symbols that can be used to design the level
//var actorChars is an object
//objects are sorta like arrays, but they give names to the locations inside itself, instead of numbers
//---------------------------------------------
//@ makes a Player on your level
//o Makes a coin on your level
//! makes stationary lava
//= makes lava that travles sideways
//| makes lave that goes up and down
//v makes lava that drips
//i makes stationary ice
//Z makes ice that travles sideways
//t makes ice that goes up and down
//T makes Ice that drips
//O Makes an orb on your level
//p Sacrifice your controls for for "immunity"
//h Resets your status to null
//b switches the gravity
var actorChars = {
  "@": Player,
  "o": Coin, 
  "=": Lava, "|": Lava, "v": Lava,  
  "T": Ice, "t": Ice, "Z": Ice,
  "O": Orb, "p": Potion, "h": Health,
  "b": Bounce
};

//this is the 6th function that is run
//called by the function runLevel, or more acuratly "needed by runLevel"
//This Function makes the level layout and actorChars object work
function Level(plan) {

  this.width = plan[0].length;


  this.height = plan.length;


  this.grid = [];


  this.actors = [];


  for (var y = 0; y < this.height; y++) {
    var line = plan[y], gridLine = [];

  
    for (var x = 0; x < this.width; x++) {


      var ch = line[x], fieldType = null;
      var Actor = actorChars[ch];

      if (Actor)
       
        this.actors.push(new Actor(new Vector(x, y), ch));

      //makes a field type for a wall using char x
      else if (ch == "x")
        fieldType = "wall";

      //makes a field type for a block of lava using char !
      else if (ch == "!")
        fieldType = "lava";
        
      //makes a field type for a floater using char y
      //floaters are like walls, but can float in mid air
      else if (ch == "y")
        fieldType = "floater";

       //makes a field type for a coin using char o
      else if (ch == "o")
        fieldType = "coin";
        
        //makes a field type for a block of ice using char i
      else if (ch == "i")
        fieldType = "ice"

      //makes a field type for an orb usxing char O
      else if (ch == "O")
        fieldType = "orb";

      //makes a field type for a potion using char p
      else if (ch == "p")
        fieldType = "potion";

      //makes a field type for a potion using char h
      else if (ch == "h")
        fieldType = "health";

      //makes a field type for a bouncer using char _
      else if (ch == "b")
        fieldType = "bounce";
      
   
      gridLine.push(fieldType);
    }

    this.grid.push(gridLine);
  }

   
  this.player = this.actors.filter(function(actor) {
    return actor.type == "player";
  })[0];
}




//This is not a function, it adds infromation to the Level Function
//.prototype always adds info to an existing function
//specificaly this adds code that handles the level ending?
Level.prototype.isFinished = function() {
  return this.status != null && this.finishDelay < 0;
};


//This is the 8th function that is run
//This is called by the Player Function 1st, but is called by several functions
//makes a grid for the code to understand so we can move the character and actors
//This also will help us make gravity work later
function Vector(x, y) {
  this.x = x; this.y = y;
}


//This is a method, it adds information to the Vector Function
//.prototype always adds info to an existing function 
//makes the x-axis movement possible
Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y + other.y);
};


//This is a method, it adds information to the Vector Function
//.prototype always adds info to an existing function
//makes the y-axis movement possible
Vector.prototype.times = function(factor) {
  return new Vector(this.x * factor, this.y * factor);
};




//called by the method animate in the function level
//tells the player what size it should be on the screen
//tells the player character where to start on the screen
//handles the player character and how it moves across the screen
function Player(pos) {
  this.pos = pos.plus(new Vector(0, -0.5));
  this.size = new Vector(0.8, 1.5);
  this.speed = new Vector(0, 0);
}
//This is not a function, it adds information to the function Player
//.prototype always adds info to an existing function
//creates new object called type inside the function Player, that hold a string that says "player"

Player.prototype.type = "player";



//called by the method animate in function level
//Tells the code how to place the coin in the level and how big it should be
function Coin(pos) {
  this.basePos = this.pos = pos.plus(new Vector(0.2, 0.1));
  this.size = new Vector(0.6, 0.6);
  
  this.wobble = Math.random() * Math.PI * 2;
}
//This is not a function, it adds information to the function Coin
//.prototype always adds info to an existing function
//creates new object called type inside the coin function, that hold a string that says "coin"

Coin.prototype.type = "coin";




//This is called by the method animate in function level
//Tells the code how to place the orb in the level and how big it should be
function Orb(pos) {
  this.basePos = this.pos = pos.plus(new Vector(0.2, 0.1));
  this.size = new Vector(0.6, 0.6);
  
  this.wobble = Math.random() * Math.PI * 2;
}
//This is not a function, it adds information to the function Orb
//.prototype always adds info to an existing function
//creates new object called type inside the Orb function, that hold a string that says "orb"

Orb.prototype.type = "orb";



//This is called by the method animate in function level
//Tells the code how to place the potion in the level and how big it should be
function Potion(pos) {
  this.basePos = this.pos = pos.plus(new Vector(0.2, 0.1));
  this.size = new Vector(0.8, 0.8);
  
  this.wobble = Math.random() * Math.PI * 2;
}
//This is not a function, it adds information to the function Potion
//.prototype always adds info to an existing function
//creates new object called type inside the Potion function, that hold a string that says "potion"

Potion.prototype.type = "potion";



//This is called by the method animate in function level
//Tells the code how to place the health potions in the level and how big it should be
function Health(pos) {
  this.basePos = this.pos = pos.plus(new Vector(0.2, 0.1));
  this.size = new Vector(0.8, 0.8);
  
  this.wobble = Math.random() * Math.PI * 2;
}
//This is not a function, it adds information to the function Health
//.prototype always adds info to an existing function
//creates new object called type inside the Health function, that hold a string that says "health"

Health.prototype.type = "health";




//This is called by the method animate in function level
//Tells the code how to place the health potions in the level and how big it should be
function Bounce(pos) {
  this.basePos = this.pos = pos.plus(new Vector(0.2, 0.1));
  this.size = new Vector(0.8,0.8);
  
  this.wobble = Math.random() * Math.PI * 2;
}
//This is not a function, it adds information to the function Health
//.prototype always adds info to an existing function
//creates new object called type inside the Health function, that hold a string that says "health"

Bounce.prototype.type = "bounce";



//This is called by the method animate in the function level
//handles the lava position and movement
//handles where to place the lava and its size on the screen
//tells the ice if it moves and what direction it moves
function Lava(pos, ch) {
  this.pos = pos;
  this.size = new Vector(1, 1);
  if (ch == "=") {
  
    this.speed = new Vector(2, 0);
  } else if (ch == "|") {

    this.speed = new Vector(0, 2);
  } else if (ch == "v") {
   
    this.speed = new Vector(0, 3);
    this.repeatPos = pos;
  }
}
//This is not a function, it adds information to the function Lava
//.prototype always adds info to an existing function
//creates new object called type inside the function Lava, that hold a string that says "lava"
Lava.prototype.type = "lava";



//This is called by the method animate in the function level
//handles the ice position and movement
//handles where to place the ice and its size on the screen
//tells the ice if it moves and what direction it moves
function Ice(pos, ch) {
this.pos = pos;
   this.size = new Vector(1, 1);
  if (ch == "Z") {
  
    this.speed = new Vector(2, 0);
  } else if (ch == "t") {

    this.speed = new Vector(0, 2);
  } else if (ch == "T") {
   
    this.speed = new Vector(0, 3);
    this.repeatPos = pos;
  }
}
//This is not a function, it adds information to the function IceS
//.prototype always adds info to an existing function
//creates new object called type inside the function Ice, that hold a string that says "ice"
Ice.prototype.type = "ice";




//makes the camera  and lvl work
//DO NOT MEES WITH THIS!
function elt(name, className) {
  var elt = document.createElement(name);
  if (className) elt.className = className;
  return elt;
}

//---------------------------------------------------------------------------------------------------------------------------------------

//This is the 3rd function that is run, it is called by function runGame
//inicilized by index.html
//makes the camera  and lvl work
//DO NOT MEES WITH THIS!
function DOMDisplay(parent, level) {


  this.wrap = parent.appendChild(elt("div", "game"));
  this.level = level;


  this.wrap.appendChild(this.drawBackground());


  this.actorLayer = null;

  
  this.drawFrame();
}

var scale = 20;


//makes the camera  and lvl work
//specificaly this draws the lvl layout
//DO NOT MEES WITH THIS!
DOMDisplay.prototype.drawBackground = function() {
  var table = elt("table", "background");
  table.style.width = this.level.width * scale + "px";


  this.level.grid.forEach(function(row) {
    var rowElt = table.appendChild(elt("tr"));
    rowElt.style.height = scale + "px";
    row.forEach(function(type) {
      rowElt.appendChild(elt("td", type));
    });
  });
  return table;
};



//makes the camera  and lvl work
//specificaly this draws actors
//DO NOT MEES WITH THIS!
DOMDisplay.prototype.drawActors = function() {

  var wrap = elt("div");


  this.level.actors.forEach(function(actor) {
    var rect = wrap.appendChild(elt("div",
                                    "actor " + actor.type));
    rect.style.width = actor.size.x * scale + "px";
    rect.style.height = actor.size.y * scale + "px";
    rect.style.left = actor.pos.x * scale + "px";
    rect.style.top = actor.pos.y * scale + "px";
  });
  return wrap;
};


//makes the camera  and lvl work
//specificaly this re-draws the lvl layout every frame
//DO NOT MEES WITH THIS!
DOMDisplay.prototype.drawFrame = function() {
  if (this.actorLayer)
    this.wrap.removeChild(this.actorLayer);
  this.actorLayer = this.wrap.appendChild(this.drawActors());

  this.wrap.className = "game " + (this.level.status || "");
  this.scrollPlayerIntoView();
};


//makes the camera  and lvl work
//specificaly this has the camera move when needed
//DO NOT MEES WITH THIS!
DOMDisplay.prototype.scrollPlayerIntoView = function() {
  var width = this.wrap.clientWidth;
  var height = this.wrap.clientHeight;


  var margin = width / 3;


  var left = this.wrap.scrollLeft, right = left + width;
  var top = this.wrap.scrollTop, bottom = top + height;

  var player = this.level.player;
 
  var center = player.pos.plus(player.size.times(0.5))
                 .times(scale);

  if (center.x < left + margin)
    this.wrap.scrollLeft = center.x - margin;
  else if (center.x > right - margin)
    this.wrap.scrollLeft = center.x + margin - width;
  if (center.y < top + margin)
    this.wrap.scrollTop = center.y - margin;
  else if (center.y > bottom - margin)
    this.wrap.scrollTop = center.y + margin - height;
};


//makes the camera  and lvl work
//specificaly this clears the previous frame
//DO NOT MEES WITH THIS!
DOMDisplay.prototype.clear = function() {
  this.wrap.parentNode.removeChild(this.wrap);
};

//---------------------------------------------------------------------------------------------------------------------------------------


//This is not a method, it adds information to the Level Function
//.prototype always adds info to an existing function
//makes the far side of the screen kill, the player, if they manage to get out of the level
Level.prototype.obstacleAt = function(pos, size) {

  var xStart = Math.floor(pos.x);

  var xEnd = Math.ceil(pos.x + size.x);

  var yStart = Math.floor(pos.y);

  var yEnd = Math.ceil(pos.y + size.y);


  if (xStart < 0 || xEnd > this.width || yStart < 0)
    return "wall";
  if (yEnd > this.height)
    return "lava";


  for (var y = yStart; y < yEnd; y++) {
    for (var x = xStart; x < xEnd; x++) {
      var fieldType = this.grid[y][x];
      if (fieldType) {
        return fieldType;
      }
    }
  }
};


//This is a method, it adds information to the Level Function
//.prototype always adds info to an existing function
//this helps control movement of an actor
Level.prototype.actorAt = function(actor) {
 
  for (var i = 0; i < this.actors.length; i++) {
    var other = this.actors[i];
  
    if (other != actor &&
        actor.pos.x + actor.size.x > other.pos.x &&
        actor.pos.x < other.pos.x + other.size.x &&
        actor.pos.y + actor.size.y > other.pos.y &&
        actor.pos.y < other.pos.y + other.size.y)
   
      return other;
  }
};


//This is a method, it adds information to the Level Function
//.prototype always adds info to an existing function
//the master controler for animating the objects in the level
Level.prototype.animate = function(step, keys) {

  if (this.status != null)
    this.finishDelay -= step;

 
  while (step > 0) {
    var thisStep = Math.min(step, maxStep);
    this.actors.forEach(function(actor) {
 
      actor.act(thisStep, this, keys);
    }, this);
 
    step -= thisStep;
  }
};


var wobbleSpeed = 8;
var wobbleDist = 0.07;

//This is a method, it adds information to the Coin Function
//.prototype always adds info to an existing function
//this adds wobble to the coins
Coin.prototype.act = function(step) {
this.wobble += step * wobbleSpeed;
var wobblePos = Math.sin(this.wobble) * wobbleDist;
this.pos = this.basePos.plus(new Vector(0, wobblePos));
};
var wobbleSpeed1 = 30;
var wobbleDist1 = 0.07;


//This is a method, it adds information to the Orb Function
//.prototype always adds info to an existing function
//this adds wobble to the orbs
Orb.prototype.act = function(step) {
this.wobble += step * wobbleSpeed1;
var wobblePos = Math.sin(this.wobble) * wobbleDist1;
this.pos = this.basePos.plus(new Vector(0, wobblePos));
};
var wobbleSpeed2 = 8;
var wobbleDist2 = 0.07;


//This is a method, it adds information to the Potion Function
//.prototype always adds info to an existing function
//this adds wobble to the potions
Potion.prototype.act = function(step) {
this.wobble += step * wobbleSpeed3;
var wobblePos = Math.sin(this.wobble) * wobbleDist3;
this.pos = this.basePos.plus(new Vector(0, wobblePos));
};
var wobbleSpeed3 = 50;
var wobbleDist3 = 0.1;


//This is a method, it adds information to the Health Function
//.prototype always adds info to an existing function
//this adds wobble to the health
Health.prototype.act = function(step) {
this.wobble += step * wobbleSpeed4;
var wobblePos = Math.sin(this.wobble) * wobbleDist4;
this.pos = this.basePos.plus(new Vector(0, wobblePos));
};
var wobbleSpeed4 = 15;
var wobbleDist4 = 0.2;


//This is a method, it adds information to the Health Function
//.prototype always adds info to an existing function
//this adds wobble to the health
Bounce.prototype.act = function(step) {
this.wobble += step * wobbleSpeed5;
var wobblePos = Math.sin(this.wobble) * wobbleDist5;
this.pos = this.basePos.plus(new Vector(0, wobblePos));
};
var wobbleSpeed5 = 1;
var wobbleDist5 = 0.1;


//This is a method, it adds information to the Ice Function
//.prototype always adds info to an existing function
//this moves the ice
Ice.prototype.act = function(step, level) {
var newPos = this.pos.plus(this.speed.times(step));
  if (!level.obstacleAt(newPos, this.size))
    this.pos = newPos;
  else if (this.repeatPos)
    this.pos = this.repeatPos;
  else
    this.speed = this.speed.times(-1);
};


//This is a method, it adds information to the Lava Function
//.prototype always adds info to an existing function
//this moves the lava
Lava.prototype.act = function(step, level) {
  var newPos = this.pos.plus(this.speed.times(step));
  if (!level.obstacleAt(newPos, this.size))
    this.pos = newPos;
  else if (this.repeatPos)
    this.pos = this.repeatPos;
  else 
    this.speed = this.speed.times(-1);
};


var maxStep = 0.05;

var playerXSpeed = 7;


//This is a method, it adds information to the Player Function
 //method = function inside a function
//.prototype always adds info to an existing function
//makes the right and left keys on the keyboard move player
//also makes status effects for the player, when it touches something
Player.prototype.moveX = function(step, level, keys) {
  this.speed.x = 0;
  if (keys.left) this.speed.x -= playerXSpeed;
  else if (level.status == "slow") this.speed.x -= 12 - playerXSpeed;
  else if (level.status == "fast") this.speed.x += 8 + playerXSpeed;
  else if (level.status == "bounce") this.speed.x -= 7 + playerXSpeed;
  else if (level.status == "reversed") this.speed.x -= 12 + playerXSpeed;
  if (keys.right) this.speed.x += playerXSpeed;
  else if (level.status == "slow") this.speed.x += 12 - playerXSpeed;
  else if (level.status == "fast") this.speed.x -= 8 + playerXSpeed;
  else if (level.status == "bounce") this.speed.x += 7 + playerXSpeed;
  else if (level.status == "reversed") this.speed.x += 12 + playerXSpeed;


  var motion = new Vector(this.speed.x * step, 0);
 
  var newPos = this.pos.plus(motion);

  var obstacle = level.obstacleAt(newPos, this.size);

  if (obstacle)
    level.playerTouched(obstacle);
  else

    this.pos = newPos;
};


//makes a number for gravity
//Change number to change gravity
//makes a number for speed of jump
var gravity = 20;
var jumpSpeed = 12;


//This is a method, it adds information to the Player Function
 //method = function inside a function
//.prototype always adds info to an existing function
//makes the up key on the keyboard move the player


Player.prototype.moveY = function(step, level, keys) {
 
 //handles gravity
  this.speed.y += step * gravity;
  var motion = new Vector(0, this.speed.y * step);
  var newPos = this.pos.plus(motion);
  var obstacle = level.obstacleAt(newPos, this.size);

//handles jump speed
//player must be touching ground to jump
  if (obstacle) {
    level.playerTouched(obstacle);
    if (keys.up && this.speed.y > 0)
      this.speed.y = -jumpSpeed;
    else
      this.speed.y = 0;
  } else {
    this.pos = newPos;
  }

};


//This is a method, it adds information to the Player Function
 //method = function inside a function
//.prototype always adds info to an existing function
//this helps moves the player when the keys are pressed
Player.prototype.act = function(step, level, keys) {
  this.moveX(step, level, keys);
  this.moveY(step, level, keys);

  var otherActor = level.actorAt(this);
  if (otherActor)
    level.playerTouched(otherActor.type, otherActor);


  if (level.status == "lost") {
    this.pos.y += step;
    this.size.y -= step;
  }


};


//This is a method, it adds information to the Level Function
 //method = function inside a function
//.prototype always adds info to an existing function
//specificaly this handles what status the player gets when the player touches objects

Level.prototype.playerTouched = function(type, actor) {

 
 if (type == "ice" && this.status == null) {
    this.status = "slow";
  } 

  else if (type == "ice" && this.status == "fast") {
    this.status = null;
  }

  else if (type == "ice" && this.status == "slow") {
    this.status = "bounce";
  }  

  else if (type == "ice" && this.status == "normal") {
    this.status = "bounce";
  }

  else if (type == "ice" && this.status == "reversed") {
    this.status = "bounce";
  }



  else if (type == "wall" && this.status == "bounce") {
    this.status = "slow";
  }

  else if (type == "floater" && this.status == "bounce") {
    this.status = "slow";
  }



  else if (type == "lava" && this.status == "bounce") {
    this.status = "lost";
    this.finishDelay = 1;
  } 

  else if (type == "lava" && this.status == "slow") {
    this.status = "lost";
    this.finishDelay = 1;
  } 

  else if (type == "lava" && this.status == "fast") {
    this.status = "lost";
    this.finishDelay = 1;
  }

  else if (type == "lava" && this.status == null) {
    this.status = "lost";
    this.finishDelay = 1;
  } 



  else if (type == "orb") {
    this.status = "lost";
    this.finishDelay = 1;
  }


    else if (type == "potion") {

    let Switch1 = setTimeout(function(){playerXSpeed=-10}, 1);
    let Switch2 = setTimeout(function(){playerXSpeed=10}, 10000);
    let Switch3 = setTimeout(function(){playerXSpeed=-10}, 20000);
    let Switch4 = setTimeout(function(){playerXSpeed=10}, 30000);
    let Switch5 = setTimeout(function(){playerXSpeed=-10}, 40000);
    let Switch6 = setTimeout(function(){playerXSpeed=10}, 50000);

    this.actors = this.actors.filter(function(other) {
      return other != actor;
    });
    if (!this.actors.some(function(actor) {
           return actor.type == "potion";
         })) {
    }
  }


     if (type == "bounce") {
      let bounceTimer = setTimeout(function(){
        gravity=-20
      }, 1);

      let backToNormal = setTimeout(function(){
        gravity=20
      }, 2000);
    }


    else if (type == "health") {
      playerXSpeed = 7;
      this.status = null;
    this.actors = this.actors.filter(function(other) {
      return other != actor;
    });
    if (!this.actors.some(function(actor) {
           return actor.type == "health";
         })) {
      this.status = null;
    }
  }

  else if (type == "coin" && this.status == "lost") {
    this.status = "lost";
    this.finishDelay = 1;
  } 

  else if (type == "coin") {
    this.status = "fast";
    this.actors = this.actors.filter(function(other) {
      return other != actor;
    });

    if (!this.actors.some(function(actor) {
           return actor.type == "coin";
         })) {
      this.status = "won";
      this.finishDelay = 1;
    }
  }

};


//init by arrows variable, but called by the function trackKeys or more acuritely "needed by" trackKeys
//tracks key press on keyboard
//give the ASCII code a string we can use
//gives the keys a varible name we can use
var arrowCodes = {37: "left", 38: "up", 39: "right", 87: "up", 32: "up", 65: "left",  68: "right"};

//DO NOT MESS WITH THIS!

//intit by arrows variable, but called by the function runLevel
//tracks key press on keyboard
function trackKeys(codes) {
  var pressed = Object.create(null);

  
  // it is called by the trackKeys function
  //This is actually a method
  //method = function inside a function
  //DO NOT MESS WITH THIS!
  //handles key press on keyboard
  function handler(event) {
    if (codes.hasOwnProperty(event.keyCode)) {

      var down = event.type == "keydown";
      pressed[codes[event.keyCode]] = down;
  
      event.preventDefault();
    }
  }
 

   //DO NOT MESS WITH THIS!
  //listens for key press
  //calls function handler if key is pressed
  addEventListener("keydown", handler);
  addEventListener("keyup", handler);
  return pressed;
}



// it is called by the function runLevel
//runs the animation
//DO NOT MESS WITH THIS!
function runAnimation(frameFunc) {
  var lastTime = null;
  
  //This is actually a method
  //method = function inside a function
  //deals with each frame of animation
  function frame(time) {
    var stop = false;
    if (lastTime != null) {
    
      var timeStep = Math.min(time - lastTime, 100) / 1000;
      stop = frameFunc(timeStep) === false;
    }
    lastTime = time;
    if (!stop)
      requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}


//when this variable is called it fires the trackKeys function
var arrows = trackKeys(arrowCodes);


//This is the 5th function that is run, it is called by the method startLevel inside the function runGame
//runs the level
//DO NOT MESS WITH THIS!
//runs the level on the call of the function runGame
function runLevel(level, Display, andThen) {
  var display = new Display(document.body, level);

  runAnimation(function(step) {
    
    level.animate(step, arrows);
    display.drawFrame(step);
    if (level.isFinished()) {
      display.clear();
      if (andThen)
        andThen(level.status);
      return false;
    }
  });
}


//This is the 1st function that is run, it is called by index.html
//runs the Game on-load of the website
//DO NOT MESS WITH THIS!
function runGame(plans, Display) {
  //This is the 4th function that is run
  //This is actually a method
  //method = function in a function
  //starts the level
  function startLevel(n) {

    runLevel(new Level(plans[n]), Display, function(status) {
      if (status == "lost")
        startLevel(n);
     
      else if (n < plans.length - 1)
        startLevel(n + 1);
      else
        alert("You win. That's it.");
    });
  }
  startLevel(0);
}