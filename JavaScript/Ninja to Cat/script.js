$('img').click(function(){
    var alt = $(this).attr('alt-src')
    console.log('alt-src value is', $(this).attr('alt-src'));
    $(this).attr('src', alt);
})