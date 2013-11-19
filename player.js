var Player = function(){
  this.position = 0;
};

Player.prototype.advance = function() {
  this.position ++;
  return this.position;
};


