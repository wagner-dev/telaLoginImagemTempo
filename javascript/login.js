// INICIO FOTO

function ft() {
    var tempo = new Date()
    var horas = tempo.getHours()
     /*LOCAL SRC FOTO*/var fotos = document.querySelector('.imagem')
    if (horas >0 && horas <13 ) {
        //manha
        // COLOQUE DIRETORIO(COMPLETO) ONDE VC COLOCOU O ARQUIVO ABAIXO (PARA FUNCIONAR)
        fotos.src= "C:/Users/Wagner/Documents/Index%20Of/logins/login-imgTempo/imgs/manha.jpg"
    }
    else if (horas >=13 && horas <18 ) {
        //tarde
        // COLOQUE DIRETORIO(COMPLETO) ONDE VC COLOCOU O ARQUIVO ABAIXO (PARA FUNCIONAR)
        fotos.src= "C:/Users/Wagner/Documents/Index%20Of/logins/login-imgTempo/imgs/tarde.jpg"
    }
    else{
        //noite
        // COLOQUE DIRETORIO(COMPLETO) ONDE VC COLOCOU O ARQUIVO ABAIXO (PARA FUNCIONAR)
        fotos.src= "C:/Users/Wagner/Documents/Index%20Of/logins/login-imgTempo/imgs/noite.jpg"
    }
} /* ATUALIZA A HORA */setInterval(ft,1000)

// FINAL FOTO