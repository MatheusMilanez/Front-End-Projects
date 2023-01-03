function tocaSom(idElementoAudio){
    const elemento = document.querySelector(idElementoAudio);

    

    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }else{
        alert('Elemento não encontrado ou Seletor inválido!');
        console.log('Elemento não encontrado ou Seletor inválido!');        
    }
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

for (let contator = 0; contator < ListaDeTeclas.length;contator++){

    const tecla = ListaDeTeclas[contator];
    const instrumento =tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template String

    //console.log(idAudio);

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }    
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}