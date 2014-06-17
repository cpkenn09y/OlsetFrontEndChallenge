// Yelp Reviews

var appendYelpContainer = function() {
  $('div.ratingsContainer').append('<div class="yelpRating"><div>Yelp rating:</div><img class="yelpImage" src="http://s3-media1.ak.yelpcdn.com/assets/2/www/img/e0bcd848f6ae/structural/header_logo.png"/></div>')
}

var appendFiveStarImg = function() {
  $('.yelpRating').append('<img class="yelpStars" src="http://i.imgur.com/PyNvL6V.png"/>')
}

var appendReviewCount = function() {
  $('.yelpRating').append('<span class="reviewCount">1337 reviews</span>')
}

// Change Existing Styling

var swapGreenToCustomBlue = function() {
  $('.green').removeClass('green').addClass('customBlue')
}

// Progress Bar

var emptyPercentMatch = function() {
  $('.percentMatch').html('')
}

var appendPercentBar = function() {
  $('.percentMatch').append('<div class="percentBar">90%</div>')
}

var assignRandomPercents = function() {
  $('.percentBar').each(function(index, element) {
    var randomPercent = getRandomPercentInterval(98,100)
    $percentBar = $(element)
    $percentBar.text(randomPercent)
    $percentBar.width(randomPercent)
  })
}

var getRandomPercentInterval = function(min,max) {
  return '' + Math.floor(Math.random() * (max - min + 1) + min) + '%'
}

// Controller

var doAllTheThings = function() {
  appendYelpContainer()
  appendFiveStarImg()
  appendReviewCount()
  swapGreenToCustomBlue()
  emptyPercentMatch()
  appendPercentBar()
  assignRandomPercents()
  getRandomPercentInterval()
}

doAllTheThings()