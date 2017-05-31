
function setupShoptelligenceCarousel($carousel) {
  //global variables
  var items = [];
  var startItem = 1;
  var position = 0;
  var itemCount = $carousel.find('li.items').length;
  var leftpos = itemCount;
  var resetCount = itemCount;

  //unused: gather text inside items class
  $carousel.find('li.items').each(function(index) {
      items[index] = $(this).text();
  });

  //swap images function
  function swap(action) {
    var direction = action;

    //moving carousel backwards
    if(direction == 'counter-clockwise') {
      var leftItem = $carousel.find('.left-pos');
      var mainItem = $carousel.find('.main-pos');
      var rightItem = $carousel.find('.right-pos');

      rightItem.removeClass('right-pos').addClass('left-pos');
      mainItem.removeClass('main-pos').addClass('right-pos');
      leftItem.removeClass('left-pos').addClass('main-pos');

    }

    //moving carousel forward
    if(direction == 'clockwise' || direction == '' || direction == null ) {
      function pos(positionvalue) {
        if(positionvalue != 'leftposition') {
          //increment image list id
          position++;

          //if final result is greater than image count, reset position.
          if((startItem+position) > resetCount) {
            position = 1-startItem;
          }
        }

        //setting the left positioned item
        if(positionvalue == 'leftposition') {
          //left positioned image should always be one left than main positioned image.
          position = startItem - 1;

          //reset last image in list to left position if first image is in main position
          if(position < 1) {
            position = itemCount;
          }
        }

        return position;
      }

     $carousel.find('[data-id="'+startItem+'"]').removeClass('main-pos').addClass('left-pos');
     $carousel.find('[data-id="'+ (startItem+pos()) +'"]').removeClass('right-pos').addClass('main-pos');
     $carousel.find('[data-id="'+ pos('leftposition') +'"]').removeClass('left-pos').addClass('right-pos');

      startItem++;
      position=0;
      if(startItem > itemCount) {
        startItem = 1;
      }
    }
  }

  //next button click function
  $carousel.find('[data-target="1"]').click(function() {
        if($carousel.find('[data-id="1"]').hasClass('right-pos')) {
          $carousel.find('[data-id="1"]').removeClass('right-pos').addClass('main-pos');
          $carousel.find('[data-id="2"]').removeClass('left-pos').addClass('right-pos');
          $carousel.find('[data-id="3"]').removeClass('main-pos').addClass('left-pos');
        }
        if($carousel.find('[data-id="1"]').hasClass('left-pos')) {
          $carousel.find('[data-id="1"]').removeClass('left-pos').addClass('main-pos');
          $carousel.find('[data-id="2"]').removeClass('main-pos').addClass('right-pos');
          $carousel.find('[data-id="3"]').removeClass('right-pos').addClass('left-pos');
        }
  });

  $carousel.find('[data-target="2"]').click(function() {
        if($carousel.find('[data-id="2"]').hasClass('right-pos')) {
          $carousel.find('[data-id="1"]').removeClass('main-pos').addClass('left-pos');
          $carousel.find('[data-id="2"]').removeClass('right-pos').addClass('main-pos');
          $carousel.find('[data-id="3"]').removeClass('left-pos').addClass('right-pos');
        }
        if($carousel.find('[data-id="2"]').hasClass('left-pos')) {
          $carousel.find('[data-id="1"]').removeClass('right-pos').addClass('left-pos');
          $carousel.find('[data-id="2"]').removeClass('left-pos').addClass('main-pos');
          $carousel.find('[data-id="3"]').removeClass('main-pos').addClass('right-pos');
        }
  });

  $carousel.find('[data-target="3"]').click(function() {
        if($carousel.find('[data-id="3"]').hasClass('right-pos')) {
          $carousel.find('[data-id="1"]').removeClass('left-pos').addClass('right-pos');
          $carousel.find('[data-id="2"]').removeClass('main-pos').addClass('left-pos');
          $carousel.find('[data-id="3"]').removeClass('right-pos').addClass('main-pos');
        }
        if($carousel.find('[data-id="3"]').hasClass('left-pos')) {
          $carousel.find('[data-id="1"]').removeClass('main-pos').addClass('right-pos');
          $carousel.find('[data-id="2"]').removeClass('right-pos').addClass('left-pos');
          $carousel.find('[data-id="3"]').removeClass('left-pos').addClass('main-pos');
        }
  });

  $carousel.find('li').click(function() {
    var target = $(this).data().id;
    $carousel.find('[data-target="' + target + '"]').click();
  });

  $carousel.find('.shoptelligence-carousel-buttons .button').click(function () {
    $(this).siblings().removeClass('is-active');
    $(this).addClass('is-active');
  });
}

$('[data-shoptelligence-carousel]').each(function() {
  setupShoptelligenceCarousel($(this));
})


