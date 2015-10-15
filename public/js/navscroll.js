$(window).on('scroll', function() {
    if ($(this).scrollTop() > 150)
    {
        $('.nav').removeClass('navbar-fixed-top');
    }
    else if
    ($(this).scrollTop() <= 150 )
    {
      $('.nav').addClass('navbar-fixed-top');
    }
});
