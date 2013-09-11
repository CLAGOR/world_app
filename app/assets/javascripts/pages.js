$(document).ready(function(){

    $(".country-area").click(function(e) {
        var top = e.pageY + "px";
        var left = e.pageX + "px";
        $("#country-info").css({top: top, left: left});
    });

});

function show_country(name) {
    $.ajax({
        url: "/country",
        data: "name=" + name,
        dataType: 'script'
    });
}
