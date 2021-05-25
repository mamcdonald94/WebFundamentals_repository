$('.hide').click(function(){
    $(this).hide();
});

$('#pantry').click(function(){
    $('img').slideDown(1000);
})

$('#change-image1').click(function(){
    $('#change-image1').attr('src', 'images/damir-spanic-gzdspwIypvw-unsplash.jpg')
})

$('#change-image2').click(function(){
    $('#change-image2').attr('src', 'images/todd-quackenbush-E9PJO_vL3E8-unsplash.jpg')
})

$('#change-image3').click(function(){
    $('#change-image3').attr('src', 'images/fitsum-admasu-oGv9xIl7DkY-unsplash.jpg')
})

$('#change-image4').click(function(){
    $('#change-image4').attr('src', 'images/diana-polekhina-Ic8J65HU3zs-unsplash.jpg')
})

$('#change-image5').click(function(){
    $('#change-image5').attr('src', 'images/jeffery-erhunse-5eQ-_Gebljg-unsplash.jpg')
})

$('#click').one('click', function(){
    $('#click').append('<input type="text">')
})