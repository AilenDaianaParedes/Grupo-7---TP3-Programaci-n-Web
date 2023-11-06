var inputs = documet.getElementsByClassName('formulario__input');
for ( var i = 0; i < inputs.length; i++) {
    inputs [i].addvEventListener('Keyup', function(){
        if(this.value.lenght>=1) {
            this.nextElementSibling.classList.add('fijar');
        } else {
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}