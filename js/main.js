document.onreadystatechange = function () {
    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".kiri").each(function() {
          /* Check the location of each desired element */
          var objectTop = $(this).offset().top ;
          
          /* If the element is completely within bounds of the window, fade it in */
          if (objectTop < windowBottom) { //object comes into view (scrolling down)
            $(this).delay(200).animate({
                'left': 0,
                'opacity' : 1
                }, 1000);
          }
        });

        $(".kanan").each(function() {
            /* Check the location of each desired element */
            var objectTop = $(this).offset().top ;
            
            /* If the element is completely within bounds of the window, fade it in */
            if (objectTop < windowBottom) { //object comes into view (scrolling down)
            $(this).delay(200).animate({
                'right': 0,
                'opacity' : 1
                }, 1000);
            }
        });

        $(".bawah").each(function() {
            /* Check the location of each desired element */
            var objectTop = $(this).offset().top ;
            
            /* If the element is completely within bounds of the window, fade it in */
            if (objectTop < windowBottom) { //object comes into view (scrolling down)
            $(this).delay(200).animate({
                'top': 0,
                'opacity' : 1
                }, 1000);
            }
        });

    }).scroll(); //invoke scroll-handler on page-load

    var lebarkanan = $('.kanan').width();
    $('.kanan').css({
        'position' : 'relative',
        'right' : -lebarkanan,
        'opacity' : 0
    });


    var lebarkiri = $('.kiri').width();
    $('.kiri').css({
        'position' : 'relative',
        'left' : -lebarkiri,
        'opacity' : 0
    });


    var tinggiBox = $('.bawah').height();
    $('.bawah').css({
        'position' : 'relative',
        'top' : -tinggiBox,
        'opacity' : 0
    });

}
