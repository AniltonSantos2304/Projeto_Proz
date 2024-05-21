
// Animação imagem página controle e tratamento

var images = document.getElementsByClassName('card-img-top');

for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('mouseover', function () {
        this.style.transform = 'scale(1.2)'; // Aumenta em 20% quando o mouse passa por cima
        this.style.transition = 'transform 0.3s ease'; // Adiciona uma transição suave à transformação
    });

    images[i].addEventListener('mouseout', function () {
        this.style.transform = 'scale(1)'; // Retorna ao tamanho original quando o mouse sai
    });
}


var images2 = document.getElementsByClassName('card-img-bottom');

for (var i = 0; i < images2.length; i++) {
    images2[i].addEventListener('mouseover', function () {
        this.style.transform = 'scale(1.2)'; // Aumenta em 20% quando o mouse passa por cima
        this.style.transition = 'transform 0.3s ease'; // Adiciona uma transição suave à transformação
    });

    images2[i].addEventListener('mouseout', function () {
        this.style.transform = 'scale(1)'; // Retorna ao tamanho original quando o mouse sai
    });
}

// Animação cards página index

var cards = document.getElementsByClassName('cardsInterativos');
console.log('teste 2');

for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('mouseover', function () {
        this.style.transform = 'scale(1.2)';
        this.style.transition = 'transform 0.3s ease';
    });

    cards[i].addEventListener('mouseout', function () {
        this.style.transform = 'scale(1)';
    });
};

// Animação página o que são dcnts

var texto = document.getElementById('texto');
console.log('teste javascript');

var paragrafos = texto.getElementsByTagName('p');

texto.addEventListener('mouseover', function() {
    for (var i = 0; i < paragrafos.length; i++) {
        paragrafos[i].style.fontWeight = 'bold'; // Define o peso da fonte como negrito
    }
});

texto.addEventListener('mouseout', function() {
    for (var i = 0; i < paragrafos.length; i++) {
        paragrafos[i].style.fontWeight = 'normal'; // Retorna o peso da fonte ao padrão
    }
});

// Animação página prevenção

function toggleVisibility() {
    var texto = document.getElementById("texto");
    if (texto.style.display === "none") {
      texto.style.display = "block";
    } else {
      texto.style.display = "none";
    }
}
