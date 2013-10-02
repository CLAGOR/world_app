// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function(){
    $('#c_nav li').click(function() {
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
        $().text('balls');        
//        $('.cont_detail').hide();               
//        SwitchContinents
    });  
    
    $('#home').click(function() {
        $(".container").animate({width: "1140"}, 1000, function () {
            $("#details_li").fadeIn(100);
            $("#details_area").slideDown(700);
            });
    }); 
    
    $('#ss_vert').click(function() {
        parseInt($("#img0").css('left'), 10) === 0 ? map_mover("horiz_r") 
        : map_mover("horiz_l");
    });
    
    $('#ss_horiz').click(function() {
        parseInt($("#img0").css('top'), 10) === 0 ? map_mover("vert_d") 
        : map_mover("vert_u");
    });
    
    
});


function image_switch(id_out, id_in, dir) /* dir can be [vert_u, vert_d, horiz_l, horiz_r] */
    {
        var $current = $('#'+ id_out);
        var $new = $('#'+ id_in);
        switch (dir)
        {
        case "vert_u":
            $new.css("top", $new.outerHeight());
            $new.show();
            $current.animate({top: -$current.outerHeight()});
            $new.animate({top: 0}, function() {$current.hide();
                                               $current.css("top", "0");} );
            break;
        case "vert_d":
            $new.css("top", -$new.outerHeight());
            $new.show();
            $current.animate({top: $current.outerHeight()});
            $new.animate({top: 0}, function() {$current.hide();
                                               $current.css("top", "0");} );
            break;
        case "horiz_r":
            $new.css("left", -$new.outerWidth());
            $new.show();
            $current.animate({left: $current.outerWidth()});
            $new.animate({left: 0}, function() {$current.hide();
                                                $current.css("left", "0");});
            break;
        case "horiz_l":
            $new.css("left", $new.outerWidth());
            $new.show();
            $current.animate({left: -$current.outerWidth()});
            $new.animate({left: 0}, function() {$current.hide();
                                                $current.css("left", "0");});           
            break;
        }
    };   

function map_mover(dir) /* dir can be [vert_u, vert_d, horiz_l, horiz_r] */
    {   
        var $map = $("#img0");
        var $rotor = $("#rotor");
        switch (dir)
        {
        case "vert_d":
            $rotor.hide();            
            parseInt($map.css('left'), 10) === 0 ? $rotor.css('transform', 'scale(1,-1)') :
                    $rotor.css('transform', 'scale(-1,-1)');
            $map.animate({top: -510}, function() {$rotor.fadeIn(500);});
            break;
        case "vert_u":
            $rotor.hide();            
            parseInt($map.css('left'), 10) === 0 ? $rotor.css('transform', 'scale(1,1)') :
                    $rotor.css('transform', 'scale(-1,1)');
            $map.animate({top: 0}, function() {$rotor.fadeIn(500);});
            break;
        case "horiz_l":
            $rotor.hide();            
            parseInt($map.css('top'), 10) === 0 ? $rotor.css('transform', 'scale(1,1)') :
                    $rotor.css('transform', 'scale(1,-1)');
            $map.animate({left: 0}, function() {$rotor.fadeIn(500);});
            break;
        case "horiz_r":
            $rotor.hide();
            parseInt($map.css('top'), 10) === 0 ? $rotor.css('transform', 'scale(-1,1)') :
                    $rotor.css('transform', 'scale(-1,-1)');
            $map.animate({left: -930}, function() {$rotor.fadeIn(500);});
            break;
        }
    }; 
   