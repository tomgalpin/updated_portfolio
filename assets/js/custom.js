
$(document).ready(function() {

    // desktop slider
    var thumbs = [
        {
            //blurb
            background_image: '',
            link_url: '#',
            thumb_class: 'blurb'
        },
        {
            //cars
            background_image: 'assets/images/carscom-1.jpg',
            link_url: '',
            thumb_class: 'cars'
        },
        {
            //universal
            background_image: 'assets/images/universal-2.jpg',
            link_url: '',
            thumb_class: 'universal'
        },
        {
            //chevyfc
            background_image: 'assets/images/chevyfc-v2.jpg',
            link_url: '',
            thumb_class: 'chevyfc'
        },
        {
            //cowboyvc
            background_image: 'assets/images/cowboy-v1.jpg',
            link_url: '',
            thumb_class: 'cowboy'
        },
        {
            //fisherprice
            background_image: 'assets/images/fisher-price.jpg',
            link_url: '',
            thumb_class: 'fisherprice'
        },
        {
            //hasbro
            background_image: 'assets/images/hasbro-v1.jpg',
            link_url: '',
            thumb_class: 'hasbro'
        },
        {
            //ninepoint88
            background_image: 'assets/images/ninepoint88.jpg',
            link_url: '',
            thumb_class: 'ninepoint88'
        }
    ];

    var right_arrow = $('#right_arrow');
    var left_arrow = $('#left_arrow');
    var shelf = $('#shelf');
    var slider = $('#slider');
    var slider_left = slider.css('left');
    var counter = 0;

    var num_thumbs_visible;
    var partial_thumb_width;
    var front_off_set;
    var is_animating = false;

    fill_slider = function(){
        var slider_width = (thumbs.length * 315);
        for (var i=0; i< thumbs.length; i++){
            slider.append('<a id="' + i + '" target="_blank" href="' + thumbs[i].link_url + '"><div class="item_wrapper ' + thumbs[i].thumb_class + '"><img src="' + thumbs[i].background_image + '"></div></a>');
        }
        //set slider width based on amount of objects in array
        slider.css('width', slider_width);
        left_arrow.hide();
    };
    fill_slider();

    right_click = function(){
        var integer_right = (parseInt(slider_left, 10) - 315);
        slider.css('left', integer_right + 'px');
        // set a time out for animation to finish
        setTimeout(function() {
            // after animation is done, read and set new slider_left
            slider_left = integer_right + 'px';
        }, 500);
        counter ++;
        // if not on first position, show the left arrow;
        if (counter > 0) { left_arrow.show();}
        console.log(counter);
    };

    left_click = function(){
        var integer_left = (parseInt(slider_left, 10) + 315);
        slider.css('left', integer_left + 'px');
        setTimeout(function() {
            // after animation is done, read and set new slider_left
            slider_left = integer_left + 'px';
        }, 500);
        counter --;
        // if on first position, disable left arrow
        if (counter <= 0) { left_arrow.hide(); }
        console.log(counter);
    };
    right_arrow.on('click', right_click);
    left_arrow.on('click', left_click);

    if (counter > 0) {
        left_arrow.show();
    }

    // mobile hamburger menu
    $("#hamburger").click(function() {

        //set the width of primary content container -> content should not scale while animating
        var contentWidth = $('#content').width();

        //set the content with the width that it has originally
        $('#content').css('width', contentWidth);

        //display a layer to disable clicking and scrolling on the content while menu is shown
        $('#contentLayer').css('display', 'block');

        //disable all scrolling on mobile devices while menu is shown
        $('#container').bind('touchmove', function(e){e.preventDefault()});

        // set margin for the whole container with a jquery UI animation
        $("#container").animate({"marginLeft": ["70%", 'easeOutExpo']}, {
           duration: 700
        });

    });
    //close the hamburger menu
    $("#contentLayer").click(function() {

        //enable all scrolling on mobile devices when menu is closed
        $('#container').unbind('touchmove');

        //set margin for the whole container back to original state with a jquery UI animation
        $("#container").animate({"marginLeft": ["0", 'easeOutExpo']}, {
            duration: 700,
            complete: function() {
                  $('#content').css('width', 'auto');
                $('#contentLayer').css('display', 'none');

            }
        });
    });

});