$(document).ready(function () 
{
    
    var fixedHeader = $('#fixedHeader');

    $(window).on('scroll', function () 
    {
    
        var proyectosOffsetTop = $('#proyectos').offset().top;

        if ($(window).scrollTop() >= proyectosOffsetTop-5) 
        {
            
            fixedHeader.css('margin-top', 0);

        }

        else if ($(window).scrollTop() <= proyectosOffsetTop/2) 
        {
            fixedHeader.css('margin-top', -68)   
        }

        /*
        else
        {
            fixedHeader.css('margin-top', -68);
        }
        */
    })
})