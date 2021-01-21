$(document).ready(function () 
{

    // Seleccionando elementos
    var slider = $('#slider')
    var btnAnterior = $('#btnAnterior')
    var btnSiguiente = $('#btnSiguiente')

    $('#slider .slide:last').insertBefore('#slider .slide:first')

    slider.css('margin-left', '-48%')

    // Función que se mueva a la derecha
    
    function moverDerecha() 
    {
        if (!slider.is(':animated')) 
        {
            slider.animate({

                marginLeft: '-113%'

            }, 800, function () 
            {
                $('#slider .slide:first').insertAfter('#slider .slide:last')
                slider.css('margin-left', '-48%')
                resetInterval()
            })
        }
    }


    btnSiguiente.on('click', moverDerecha)

    // Mover hacia la derecha

    function moverIzquierda() 
    {
        if (!slider.is(':animated')) 
        {
            $('#slider .slide:last').insertBefore('#slider .slide:first')
            slider.css('margin-left', '-113%')
            slider.animate({
                marginLeft: '-48%'
            }, 800, function () 
            {
                resetInterval()    
            })
        }
    }
    
    btnAnterior.on('click', moverIzquierda)
    var intervalo = setInterval(moverDerecha, 5000)
    function resetInterval() 
    {
        clearInterval(intervalo)
        intervalo = setInterval(moverDerecha, 5000)
    }
})

