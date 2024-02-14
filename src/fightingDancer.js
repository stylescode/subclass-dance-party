var makeFightingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  imgnode = $('<img src="https://i.ibb.co/8ctWQjN/Manny-Pacquiao-boxing.png" alt="Manny-Pacquiao-boxing" border="0">');
  $(this.$node).append(imgnode).addClass('fightDancer');
  this.$node.addClass('fightingDancer');
};

makeFightingDancer.prototype = Object.create(makeDancer.prototype);
makeFightingDancer.prototype.constructor = makeFightingDancer;

makeFightingDancer.prototype.flip = function () {
  makeDancer.prototype.step.call(this);
  // use jQuery to animate a flip
  //add transform: rotate to css
};
