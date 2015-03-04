+function ($) {
  'use strict';

  // variables
  var body = $('body'),
    postImage = $('#postImage'),
    // latestButton = $('#latestButton'),
    // archiveButton = $('#archiveButton'),
    prevButton = $('#prevButton'),
    nextButton = $('#nextButton');

  var fadeInDelay = 50,
    navigateDelay = 150;

  var leftKeyCode = 37,
    rightKeyCode = 39;
    // upKeyCode = 38,
    // downKeyCode = 40,
    // escKeyCode = 27;

  // functions
  var navigate = function(href) {
    body.addClass('isTransitioning');
    setTimeout(function() {
      window.location.href = href;
    }, navigateDelay);
  };

  // redirect from index
  if (window.location.pathname == '/') {
    var href = $('#firstPostLink').attr('href');
    if (href) window.location.href = href;
  }

  // previous and next
  $('a').click(function(e) {
    e.preventDefault();
    var href = $(this).attr('href');
    if (href) {
      navigate(href);
    }
    return false;
  });

  // keys
  $(document).keydown(function(e) {
    var location = false; // instantiate
    if (e.keyCode == leftKeyCode) {
      if (prevButton) {
        location = prevButton.attr('href');
      }
    } else if (e.keyCode == rightKeyCode) {
      if (nextButton) {
        location = nextButton.attr('href');
      }
    }
    if (location) {
      navigate(location);
    }
  });

  // image preloading and transition classes
  body.addClass('isTransitioning');
  $(window).on('load pageshow', function() {
    setTimeout(function() {
      body.removeClass('isTransitioning');
    }, fadeInDelay);
    var prevImageSrc = $('#prevImage').html(),
      nextImageSrc = $('#nextImage').html();
    $([prevImageSrc, nextImageSrc]).preload();
  });
  $.fn.preload = function() {
    this.each(function() {
      if (this) {
        $('<img/>')[0].src = this;
      }
    });
  };

}(jQuery);
