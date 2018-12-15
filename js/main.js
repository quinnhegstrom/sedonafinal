$(document).ready(function() {


$('#btn-animate').on('click', function() {

    $('#part-one-title').addClass('animated zoomOutDown');
    $('#btn-animate').addClass('animated lightSpeedOut');
})


setTimeout(function(){

    $('#part-2-title').FadeIn(200);
}, 500);


});