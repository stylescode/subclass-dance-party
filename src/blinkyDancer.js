// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   makeDancer.call(this, top, left, timeBetweenSteps);
//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function
//   this.$node.classList.add('blinkyDancer');
//   var oldStep = this.step;

//   // this.step = function() {
//   //   // call the old version of step at the beginning of any call to this new version of step
//   //   oldStep();
//   //   // toggle() is a jQuery method to show/hide the <span> tag.
//   //   // See http://api.jquery.com/category/effects/ for this and
//   //   // other effects you can use on a jQuery-wrapped html tag.
//   //   this.$node.toggle();
//   // };

// };

// makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
// makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

// makeBlinkyDancer.prototype.step = function() {
//   makeDancer.prototype.step.call(this);
//   this.$node.toggle();
// };


var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  imgnode = $('<img src="https://i.ibb.co/zFMb4H3/Mariah-Careysinging-PNGImage-1.png" alt="Mariah-Careysinging-PNGImage-1" border="0">');
  $(this.$node).append(imgnode).addClass('blinkDancer');
  this.$node.addClass('blinkyDancer');

};


makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};