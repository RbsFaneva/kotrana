function _$(elt){
    return document.getElementById(elt);
}

window.addEventListener('onload',function(e){
    e.preventDefault();
    f = _$("form1");
    f.addEventListener('submit',function(e){    
        e.preventDefault();
        alert('Sended');   
        user = _$('user').value;
        pwd = _$('pwd').value;
        console.log(user+" "+pwd);

    });
});


