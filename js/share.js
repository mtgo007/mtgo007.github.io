function share(){
    let obj = {}
    $(".eliminatorias").each(function(){
        obj[$(this).attr('id')] = $(this).html().replace(/\s/g, '');
    })
    obj['nome'] = $('#nome').val()
    $("#link").val(`${$(location).attr('href')}?bracket=${JSON.stringify(obj)}`)
    $('#nome_Share').html($("#nome").val());
    $('#share').modal('show');
}

function copyToClipboard() {
    var text = $("#link").select();
    document.execCommand("copy");
    alert('Link Copiado');
    $('#share').modal('hide');
}

$.urlParam = function(name){
	let results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	return results ? results[1] || 0 : 0;
}
if($.urlParam('bracket') != 0){
    const obj = JSON.parse(decodeURIComponent($.urlParam('bracket')))
    for(key in obj){
        const btn = $(`#${key}`)
        $(btn[0]).html(obj[key]);
    }
    $('#nome').val(obj['nome']);
    if(obj['nome']){
        $('#titulo').html(`Bracket do ${obj['nome']}`);
        $('#titulo').css('display','block');
        document.title = `Bracket do ${obj['nome']}`;
    }
    $(".item").each(function(){
        var grand = $(this).parent().parent();
        var son = $('#'+$(this).parent().attr('next'))
        console.log(son.html())
        if($(this).html() != "") {
            $(this).css('visibility', 'visible');
        }
        if(son.html() != "") {
            grand.find('.divisor').css('border-left-color', '#32CD32');
        }
    })
    window.history.pushState("", "", "/");
}