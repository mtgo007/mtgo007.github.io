$('.disputa').find('.item').each(function () {
    let atual = $(this)
    atual.click(function(){
        atual.parent().find('.item').removeClass('.active')
        atual.addClass('.active')
        updateNext(atual)
        animation(atual)
    })
})

function updateNext(atual) {
    var grand = atual.parent().parent()
    var id = atual.parent().attr('next')
    var proximo = $('#'+id)
    grand.find('.divisor').css('border-left-color', '#32CD32')
    proximo.css('visibility', 'visible')
    proximo.html(atual.html())
    animation(proximo)
    if(id == 'resultado') {
        $('#compartilhar').css('visibility', 'visible')
    }
    if(proximo.hasClass('.active')) {
        updateNext(proximo)
    }
}

function animation(atual) {
    atual.animate({opacity: 0.3}, 300, 'linear')
    atual.animate({opacity: 1}, 300, 'linear')
}

$('#compartilhar').click(function(){
    share();
})