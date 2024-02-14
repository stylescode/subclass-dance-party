var makeSubZeroDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  imgnode = $('<img src="https://i.ibb.co/4Nh1XQ6/png-transparent-ultimate-mortal-kombat-3-sub-zero-reptile-sub-zero-superhero-fictional-character-mor.png" alt="png-transparent-ultimate-mortal-kombat-3-sub-zero-reptile-sub-zero-superhero-fictional-character-mor" border="0">');
  $(this.$node).append(imgnode).addClass('subDancer');
  this.$node.addClass('subZeroDancer');
};

makeSubZeroDancer.prototype = Object.create(makeDancer.prototype);
makeSubZeroDancer.prototype.constructor = makeSubZeroDancer;

makeSubZeroDancer.prototype.rotate = function() {
  // use jquery to rotate
  makeDancer.prototype.step.call(this);
  var styleSettings = {

    transform: rotate(0.5),
  };
  this.$node.css(styleSettings);

};

