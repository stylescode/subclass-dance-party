$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000

    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });
});

$(".lineUpButton").on("click", function(event) {

  var pixels = (window.innerWidth * .96) / window.dancers.length;
  var shuffled = shuffledArray(window.dancers);

  for (var i = 0; i < shuffled.length; i++) {
    var leftPos = (i * pixels) + (pixels / 2);
    shuffled[i].lineUp(410, leftPos);
  }
});

$(".breakUpButton").on("click", function() {
  window.dancers.forEach(function(dancer) {
    dancer.lineUp($('body').height() * Math.random(), $('body').width() * Math.random());
  });

});

$("body").on('click', '.dancer', function(event) {
  console.log(this.css);
  // this is to set the css, but how do we get the current css info?do u know?
$(this).css("top", 233);


});


$(".danceOffButton").on("click", function() {
  var shuffled = shuffledArray(window.dancers);

  // start left row 2% of width into screen
  var startingLeft = (window.innerWidth * .02);

  // start right row 90% of width into screen
  var startingRight = (window.innerWidth * .9);

 // start first characters 80% from top of screen
  var startingTopLeft = (window.innerHeight * .8);
  var startingTopRight = (window.innerHeight * .8);

  // both rows should only take up 10% of width of screen each
  var totalLeft = (window.innerWidth * .1);
  var totalRight = (window.innerWidth * .1);

  // both rows should be contained to the bottom 40% of the screen
  var totalTopLeft = (window.innerHeight * .4);
  var totalTopRight = (window.innerHeight * .4);


  // var totalLeft = (window.innerHeight * .7) / (shuffled.length);

  shuffled.forEach(function(dancer, index) {
    // split total area of left by the amount of people on left
    var addLeft = index * (totalLeft / (shuffled.length / 2));
    // add space to the left of person based on their index
    var leftPos = startingLeft + addLeft;

    // split total area of right by people on right
    var addRight = index * (totalRight / (shuffled.length / 2));
    // add space to the right of person based on their index
    var rightPos = startingRight - addRight;

    // add space to top based on their index
    var addTopLeft = index * (totalTopLeft / (shuffled.length));
    var topLeftPos = startingTopLeft - addTopLeft;

    // add space to top based on their index
    var addTopRight = (index + 1) * (totalTopRight / (shuffled.length));
    var topRightPos = startingTopRight - addTopRight;


    //  var leftPos = (index * totalLeft)
    // dancer.lineUp(leftPos, startingLeft);
    // startingLeft -= 30;

    if (index % 2 !== 0) {
      dancer.lineUp(topLeftPos, leftPos);

    } else {
      dancer.lineUp(topRightPos, rightPos);

    }

  });
});




// shuffle array function
var shuffledArray = function(array) {
  for (let i = array.length - 1; i > 0; i--) {
    //select a random index from within array
    var j = Math.floor(Math.random() * (i + 1));
    // keep track of the value of the last element in array
    var temp = array[i];
    //last element is now the randomly selected element
    array[i] = array[j];
    // former last element now goes in random elements former place
    array[j] = temp;
  }
  return array;
};


